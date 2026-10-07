const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "*" }));
app.use(express.json());

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

// IP + Device capture middleware
app.use((req, res, next) => {
  req.clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  req.device = req.headers['user-agent'];
  next();
});

// Clock-in / Track
app.post('/api/clock-in', async (req, res) => {
  const { userId } = req.body;
  try {
    const session = await prisma.workSession.create({
      data: {
        userId,
        ipAddress: req.clientIp,
        deviceInfo: req.device,
      }
    });
    io.emit('worker-activity', { type: 'CLOCK_IN', userId, ip: req.clientIp, device: req.device, timestamp: new Date() });
    res.json(session);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/clock-out', async (req, res) => {
  const { sessionId } = req.body;
  try {
    const session = await prisma.workSession.update({
      where: { id: sessionId },
      data: { clockOut: new Date() }
    });
    io.emit('worker-activity', { type: 'CLOCK_OUT', sessionId, timestamp: new Date() });
    res.json(session);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

io.on('connection', (socket) => {
  console.log('Command Center Connected:', socket.id);
  
  socket.on('admin-action', (data) => {
    // data: { action: 'APPROVE'|'SUSPEND'|'TERMINATE', workerId }
    io.emit('admin-update', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('CEDARS EMPIRE BACKEND • 360° LIVE • RUNNING');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`BACKEND RUNNING ON ${PORT}`));
