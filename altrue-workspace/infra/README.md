# ALTRUE Infrastructure Documentation

## Overview
This document provides an overview of the infrastructure setup for the ALTRUE application. It outlines the necessary components, configurations, and scripts required to deploy and manage the application effectively.

## Directory Structure
- **mongo/init-js**: Contains initialization scripts for MongoDB. These scripts are used to set up the database schema and seed initial data.
- **scripts**: This directory includes various scripts for managing the application.
  - **seed.js**: A script for seeding the database with initial data.
  - **healthcheck.sh**: A script for performing health checks on the application to ensure all services are running as expected.

## MongoDB Initialization
To initialize the MongoDB database, navigate to the `mongo/init-js` directory and run the appropriate scripts. These scripts will create the necessary collections and indexes required by the application.

## Running Scripts
To run the seed script, use the following command:
```
node scripts/seed.js
```

To perform a health check, execute the following command:
```
bash scripts/healthcheck.sh
```

## Docker Setup
Ensure that Docker and Docker Compose are installed on your machine. The Docker setup allows for easy deployment and management of the application services.

## Conclusion
This README serves as a guide for setting up and managing the infrastructure for the ALTRUE application. For further details on the application itself, refer to the main README file located in the root of the project.