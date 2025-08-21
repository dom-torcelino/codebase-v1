#!/bin/bash

# Healthcheck script for ALTRUE application

# Define the URL to check
URL="http://localhost:3000/api/health"

# Send a request to the health check endpoint
response=$(curl --write-out "%{http_code}\n" --silent --output /dev/null "$URL")

# Check the response code
if [ "$response" -eq 200 ]; then
  echo "Healthcheck passed: Application is running."
  exit 0
else
  echo "Healthcheck failed: Application is not reachable."
  exit 1
fi