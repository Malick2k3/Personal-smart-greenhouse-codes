# System Overview

## Components

- **Wio Terminal firmware** reads sensors, controls the relay, updates the local screen, and sends UDP payloads
- **PocketBase** stores greenhouse readings and handles user authentication for the dashboard pages
- **Static frontend pages** display the latest greenhouse state and provide login/signup flows
- **Backend utilities** provide a small Node.js entry point for reading stored data from PocketBase

## Data flow

```text
Sensors -> Wio Terminal firmware -> UDP payload -> PocketBase -> Browser dashboard
```

## Main sensor fields

- `temperature`
- `humidity`
- `soil_moisture`
- `light_intensity`

## Automation rule

The current watering logic is threshold-based:

- if soil moisture drops below `soilThreshold`
- and the pump is not already running
- and the cooldown period has passed

then the relay is enabled for `pumpDuration`.

That makes the watering logic simple and understandable, which is good for a student prototype. It is closer to a thermostat than to a full climate control system.
