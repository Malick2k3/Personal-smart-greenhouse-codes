# Smart Greenhouse

Smart Greenhouse is an IoT student project built around a Wio Terminal, a small sensor stack, and a web dashboard for remote monitoring. The system reads temperature, humidity, soil moisture, and light intensity, sends the readings over Wi-Fi, and turns a water pump on when the soil gets too dry.

![Smart greenhouse setup](./frontend/assets/greenhouse-project.jpg)

## What the project does

- Reads greenhouse conditions from an SHT4x sensor, soil moisture probe, and light sensor
- Displays the latest values on the Wio Terminal screen
- Sends sensor payloads over UDP to a backend workflow
- Stores readings in PocketBase for dashboard access
- Shows the latest greenhouse readings in a browser dashboard
- Supports user signup and login for the web interface

## Tech stack

- Firmware: Arduino C++ on Wio Terminal
- Data flow: Wi-Fi + UDP payloads
- Storage and auth: PocketBase
- Web interface: HTML, CSS, JavaScript
- Backend utilities: Node.js scripts for reading PocketBase data

## Repository layout

```text
.
|-- backend
|   |-- scripts
|   `-- src
|-- docs
|-- firmware
|-- frontend
|   |-- assets
|   `-- js
`-- README.md
```

## How it works

1. The Wio Terminal reads temperature, humidity, soil moisture, and light.
2. The firmware checks the soil threshold and activates the relay-controlled pump when watering is needed.
3. Sensor data is sent as a JSON payload over UDP.
4. PocketBase stores the readings and provides access to them for the dashboard.
5. The dashboard fetches the latest record and updates the gauges in the browser.

The simple way to picture it is this: the firmware is the body, the dashboard is the face, and PocketBase is the memory in the middle.

## Running the web interface

The frontend is a small static site.

- Open [`frontend/index.html`](./frontend/index.html) in a browser to view the landing page
- Use [`frontend/login.html`](./frontend/login.html) and [`frontend/signup.html`](./frontend/signup.html) for authentication
- Open [`frontend/dashboard.html`](./frontend/dashboard.html) to view the latest sensor readings

The shared PocketBase URL lives in [`frontend/js/config.js`](./frontend/js/config.js).

## Running the backend utilities

```bash
cd backend
npm install
npm run list:readings
```

If you want to use a different PocketBase instance, copy `backend/.env.example` to `.env` and update the URL.

## Firmware setup

1. Copy [`firmware/config.example.h`](./firmware/config.example.h) to `firmware/config.h`
2. Fill in your Wi-Fi credentials and UDP target
3. Open [`firmware/wio_terminal_greenhouse.ino`](./firmware/wio_terminal_greenhouse.ino) in the Arduino IDE
4. Install the required Wio Terminal, TFT, Wi-Fi, and SHT4x libraries
5. Upload the sketch to the board

## Notes for reviewers

- This repo is focused on the project code and data flow, not on PCB or enclosure documentation
- PocketBase is the persistent storage layer for readings and authentication
- The backend folder contains utility scripts around PocketBase rather than a standalone Express API

## Team

This project was built as a small interdisciplinary team project with one computer science student and three mechanical engineering students.
