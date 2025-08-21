# ALTRUE - Full-Stack SaaS Application

## Overview
ALTRUE is a multi-tenant Software as a Service (SaaS) application built with a modern tech stack. It features a TypeScript frontend using Next.js, Tailwind CSS, Material UI, and Axios, alongside a JavaScript backend powered by Node.js, Express.js, and MongoDB. The application is designed to provide a secure, scalable, and user-friendly experience for managing tenants and users.

## Features
- **Authentication & User Management**: JWT authentication, secure password reset, multi-factor authentication (MFA), and role-based access control (RBAC).
- **Tenant Management**: Dynamic branding, tenant-aware settings, and multi-org support.
- **Security**: Field-level encryption, input validation, rate limiting, and protection against common vulnerabilities.
- **Notifications**: Email notifications using Nodemailer and optional SMS notifications via Twilio.
- **Logging & Monitoring**: Integrated logging with Winston or Pino, and optional Sentry integration for error tracking.
- **DevOps**: Docker and Docker Compose for easy deployment and local development.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd altrue-workspace
   ```

2. **Set up environment variables**:
   - Copy the example environment files:
     ```bash
     cp .env.example .env
     cp backend/.env.example backend/.env
     ```
   - Update the `.env` files with your configuration.

3. **Install dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

4. **Run the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm run dev
     ```

### Docker Setup
To run the application using Docker, you can use the provided `docker-compose.yml` file. Make sure Docker is installed and running, then execute:
```bash
docker-compose up
```

### Testing
- Backend tests can be run using:
  ```bash
  cd backend
  npm test
  ```
- Frontend tests can be run using:
  ```bash
  cd frontend
  npm test
  ```

### Documentation
API documentation is available at `/api/docs` once the backend server is running.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.