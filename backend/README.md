# Backend Utilities

This folder contains the small Node.js utilities used to read and write greenhouse sensor data in PocketBase.

## Setup

```bash
npm install
```

Create a `.env` file from `.env.example` if you want to point the scripts to a different PocketBase instance.

## Available command

```bash
npm run list:readings
```

That command fetches the latest records from the `readings` collection and prints them to the terminal.
