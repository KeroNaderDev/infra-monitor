#!/bin/bash
# Infra Monitor — Real Code
echo "Checking uptime..."
uptime
echo "Checking disk..."
df -h | head -n 5
echo "Checking nginx..."
systemctl status nginx --no-pager | head -n 10 || echo "nginx not running"
curl -X POST https://kero.10001mb.com/api/monitor -H "Content-Type: application/json" -d "{\"host\":\"$(hostname)\",\"uptime\":\"$(uptime -p)\"}" || echo "API not reachable"
