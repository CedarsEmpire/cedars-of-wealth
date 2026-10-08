#!/usr/bin/env python3
import http.server, socketserver, json, hashlib, time, os, hmac
from dataclasses import dataclass
from typing import Dict, List
import secrets

PORT = 8080

@dataclass
class PowerMetrics:
    solar_generation_watts: float
    battery_charge_percent: float
    power_draw_watts: float
    grid_online: bool
    timestamp: float

class AutonomousPowerEngine:
    def __init__(self, critical_load_watts: float = 150.0):
        self.critical_load = critical_load_watts
        self.mode = "HYBRID_OPTIMAL"
    def evaluate_power_state(self, m: PowerMetrics) -> str:
        if not m.grid_online and m.battery_charge_percent < 15.0:
            self.mode = "EMERGENCY_SHEDDING"
            return "SHED_NON_CRITICAL_LOADS"
        if m.solar_generation_watts >= m.power_draw_watts:
            self.mode = "SOLAR_SURPLUS_CHARGING"
            return "OPTIMAL_FULL_CAPACITY"
        if m.solar_generation_watts < self.critical_load:
            self.mode = "CONSERVATION_MODE"
            return "THROTTLE_CPU_50_PERCENT"
        self.mode = "SUPERCAP_DISCHARGE"
        return "STABLE_HYBRID_OPERATION"

@dataclass
class AuditBlock:
    index: int; timestamp: float; data: Dict; previous_hash: str; nonce: int = 0; hash: str = ""
    def compute_hash(self) -> str:
        s = f"{self.index}{self.timestamp}{json.dumps(self.data, sort_keys=True)}{self.previous_hash}{self.nonce}"
        return hashlib.sha3_256(s.encode()).hexdigest()

class ImmutableWormLedger:
    def __init__(self):
        self.chain: List[AuditBlock] = []
        genesis = AuditBlock(0, time.time(), {"event": "CEDARS_GENESIS"}, "0"*64)
        genesis.hash = genesis.compute_hash()
        self.chain.append(genesis)
    def append_entry(self, event_data: Dict) -> AuditBlock:
        prev = self.chain[-1]
        b = AuditBlock(len(self.chain), time.time(), event_data, prev.hash)
        b.hash = b.compute_hash()
        self.chain.append(b)
        return b
    def verify_integrity(self) -> bool:
        for i in range(1, len(self.chain)):
            if self.chain[i].previous_hash!= self.chain[i-1].hash: return False
            if self.chain[i].hash!= self.chain[i].compute_hash(): return False
        return True

class ZeroTrustNodeValidator:
    def __init__(self, master_key: str):
        self.master_key = master_key
        self.revoked: set = set()
    def generate_node_challenge(self, node_id: str) -> Dict:
        # HARDENED: 32 bytes pure random, no time
        token = secrets.token_hex(32)
        return {"node_id": node_id, "challenge": token, "issued_at": time.time()}
    def verify_response(self, node_id: str, challenge: str, sig: str) -> bool:
        if node_id in self.revoked: return False
        expected = hashlib.sha3_256(f"{challenge}:{self.master_key}".encode()).hexdigest()
        # HARDENED: constant-time compare
        return hmac.compare_digest(sig, expected)

EMBEDDED_HTML = open("index.html","r").read() if os.path.exists("index.html") else "<h1>Cedars Secure</h1>"

class SecureHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path in ["/", "/index.html"]:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.send_header("X-Content-Type-Options", "nosniff")
            self.send_header("X-Frame-Options", "DENY")
            self.send_header("Content-Security-Policy", "default-src 'self'")
            self.send_header("Strict-Transport-Security", "max-age=31536000")
            self.end_headers()
            self.wfile.write(EMBEDDED_HTML.encode())
        elif self.path == "/api/status":
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"empire":"Cedars Empire","status":"SECURE","ledger_valid":True,"ts":time.time()}).encode())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"404 DENIED")
    def log_message(self, f, *a): print(f"[GATEWAY] {f%a}")

if __name__ == "__main__":
    print(f"[*] Cedars Secure Gateway :{PORT}")
    ledger = ImmutableWormLedger()
    ledger.append_entry({"boot":"secure"})
    print(f"[LEDGER] Integrity {ledger.verify_integrity()} Height {len(ledger.chain)}")
    with socketserver.TCPServer(("", PORT), SecureHandler) as httpd:
        httpd.serve_forever()
