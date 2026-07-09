# Smart Greenhouse Case Study

## Project Summary

Smart Greenhouse is an IoT student project built around a Wio Terminal, sensor readings, wireless data transfer, PocketBase storage, and a browser dashboard. The system reads temperature, humidity, soil moisture, and light intensity, then uses a threshold rule to activate watering when the soil gets too dry.

The project connects hardware, data flow, storage, and user interface into one working prototype.

## Problem

A greenhouse needs regular environmental monitoring. Manually checking soil moisture, temperature, humidity, and light is repetitive and easy to forget. A simple connected system can make the state of the greenhouse visible and automate basic watering decisions.

The goal was not to build an industrial greenhouse controller. The goal was to create a clear prototype that shows the full chain from sensing to dashboard.

## What I Built

The project includes:

- Wio Terminal firmware for sensor reading and screen display
- soil moisture threshold logic
- relay-controlled watering behavior
- UDP payload transmission over Wi-Fi
- PocketBase storage for sensor readings
- browser pages for landing, login, signup, and dashboard
- backend utility scripts for reading stored PocketBase data

## Architecture

```text
Sensors
    -> Wio Terminal firmware
    -> UDP payload
    -> PocketBase storage
    -> browser dashboard
```

The simple way to picture it is this: the firmware is the body, the dashboard is the face, and PocketBase is the memory in the middle.

## Key Technical Decisions

### Using the Wio Terminal

The Wio Terminal gave the project a compact hardware base with a screen and Wi-Fi support. That made it possible to show readings locally and still send data to the dashboard workflow.

### Keeping the watering rule simple

The watering logic is threshold-based:

- if soil moisture drops below the threshold
- and the pump is not already running
- and the cooldown period has passed

then the relay is enabled for a fixed duration.

This is intentionally simple. For a student prototype, a clear rule is better than a complex algorithm that is hard to test.

### Using PocketBase

PocketBase handles storage and authentication for the dashboard pages. This reduced the amount of backend code needed while still giving the project persistent data and user login flows.

## Evidence

The project can be demonstrated through:

- hardware prototype images
- dashboard screenshots showing greenhouse readings
- architecture documentation
- firmware code for sensor reading and pump logic
- frontend pages for dashboard and authentication

## Current Limitations

- The project focuses on code and data flow, not enclosure or PCB design.
- The backend utilities are not a full standalone Express API.
- Watering logic is threshold-based and does not yet account for weather forecasts, plant type, or historical patterns.
- Real greenhouse deployment would need stronger hardware protection and longer-term testing.

## What I Learned

This project helped me connect embedded programming with web-facing data. The main lesson is that IoT is a pipeline: the sensor reading matters, but so does transport, storage, dashboard design, and failure handling. If one part of the chain is weak, the whole system becomes less useful.

