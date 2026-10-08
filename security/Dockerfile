FROM python:3.11-slim-bookworm
RUN groupadd -g 10001 cedars && useradd -u 10001 -g cedars -s /sbin/nologin -m -d /app cedars
WORKDIR /app
COPY --chown=cedars:cedars. /app/
USER 10001:10001
EXPOSE 8080
HEALTHCHECK --interval=30s CMD python3 -c "import urllib.request; urllib.request.urlopen('http://localhost:8080/api/status')"
ENTRYPOINT ["python3", "cedars_empire.py"]
