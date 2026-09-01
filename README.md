# 📊 Infra Monitor — Demo

Linux server monitoring for uptime, logs, and alerts

> **DevOps Track — Demo Showcase** | **Real Problem, Synthetic Data**

## Overview
**Problem:** Server outages are discovered late

**Solution:** Linux server monitoring for uptime, logs, and alerts This demo proves the engineering approach with synthetic data.

## Architecture
```
Servers → Agent (Bash) → API → DB → Dashboard → Alerts
```

## Tech Stack
- Linux, Bash, Node, Docker

## Features
- Uptime checks\n- Log aggregation\n- Telegram alerts

## Security
- Validation, JWT/RBAC, Rate limiting, No real secrets

## Screenshots
![Demo](./screenshots/demo.png)

## Demo
- **Demo Data:** `demo-data.json`
- **Live:** `https://kero.10001mb.com/demo/infra-monitor-demo` *(placeholder)*

## Installation
```bash
git clone https://github.com/KeroNaderDev/infra-monitor-demo.git
cd infra-monitor-demo
npm install
cp .env.example .env
npm run dev
```

## Usage
```bash
npm run dev
```

## What I Learned
- DevOps end-to-end design
- Demo vs real data separation
- Professional portfolio structure

---
*Track: DevOps • Portfolio: [KeroNaderDev](https://github.com/KeroNaderDev)*
