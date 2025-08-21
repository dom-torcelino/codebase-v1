# ALTRUE Backend Documentation

## Overview
ALTRUE is a full-stack SaaS application designed to provide a robust platform for managing multi-tenant environments. This backend documentation outlines the structure, setup, and usage of the backend services.

## Technologies Used
- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web framework for Node.js to build APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for MongoDB to manage data relationships.
- **JWT**: JSON Web Tokens for secure authentication.
- **Bcryptjs/Argon2**: For password hashing.
- **Nodemailer**: For sending emails.
- **Twilio**: For optional SMS notifications.
- **Winston/Pino**: For logging and monitoring.
- **Docker**: For containerization and deployment.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd altrue-workspace/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables.

4. Start the application:
   ```
   npm start
   ```

### Docker Setup
To run the backend using Docker, ensure you have Docker and Docker Compose installed. Then, run:
```
docker-compose up
```

## API Documentation
API endpoints are documented using Swagger. Access the documentation at:
```
http://localhost:<port>/api/docs
```

## Testing
To run tests for the backend, use:
```
npm test
```

## Directory Structure
- **src/**: Contains the main application code.
  - **config/**: Configuration files for database, logger, mailer, and Sentry.
  - **controllers/**: Logic for handling requests.
  - **middlewares/**: Custom middleware for authentication, validation, and error handling.
  - **models/**: Mongoose models for MongoDB collections.
  - **routes/**: API route definitions.
  - **services/**: Business logic and external service integrations.
  - **utils/**: Utility functions for encryption, validation, and JWT handling.
  - **tests/**: Test files for the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.