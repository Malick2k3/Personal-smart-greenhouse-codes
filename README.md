🌿 Smart Greenhouse Project
A collaborative IoT project that monitors and controls plant growth conditions in real-time using sensors, automation, and web technologies.

Overview
This Smart Greenhouse system uses a microcontroller with various sensors to collect environmental data (temperature, humidity, soil moisture, light) and automatically control a watering system. The data is transmitted to a web dashboard for remote monitoring and control.

Features
Real-time Environmental Monitoring

Temperature and humidity tracking with SHT4x sensor

Soil moisture detection

Light intensity measurement

Automated Plant Care

Automatic watering system based on soil moisture levels

Configurable thresholds and timing parameters

Remote Monitoring

Web dashboard for real-time data visualization

Historical data logging and analysis

User-friendly Interface

Mobile-responsive web application

Visual indicators for plant health status

Technology Stack
Hardware
Arduino-compatible microcontroller (Wio Terminal)

SHT4x temperature and humidity sensor

Soil moisture sensor

Light sensor

Relay-controlled water pump

TFT display for local readings

Software
Embedded C++ for microcontroller

Express.js for backend server

PocketBase for database

HTML/CSS/JavaScript for frontend dashboard

Getting Started
Clone this repository

Set up the hardware components according to the wiring diagram

Upload the Arduino code to your microcontroller

Install dependencies for the server:


npm install
Run the server:


node server.js
Access the dashboard at http://localhost:3000

Project Structure
/arduino - Microcontroller code for sensor reading and pump control

/server - Backend server code for data processing and storage

/web - Frontend dashboard for visualization

Contributors
This project was developed by a team of 5 students:

2 Computer Science students (software development)

3 Mechanical Engineering students (hardware design)
