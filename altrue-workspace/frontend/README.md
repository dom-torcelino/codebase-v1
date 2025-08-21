# ALTRUE Frontend Documentation

## Overview
ALTRUE is a full-stack SaaS application designed to provide a seamless experience for managing tenants and users. This frontend application is built using Next.js, TypeScript, Tailwind CSS, Material UI, and Axios, ensuring a modern and responsive user interface.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Docker (optional, for containerized development)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd altrue-workspace/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
or
```
yarn dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To build the application for production, run:
```
npm run build
```
or
```
yarn build
```
Then, you can start the production server with:
```
npm start
```
or
```
yarn start
```

## Folder Structure
- `src/`: Contains the main application code.
  - `pages/`: Next.js pages for routing.
  - `components/`: Reusable UI components.
  - `contexts/`: Context providers for state management.
  - `hooks/`: Custom React hooks.
  - `services/`: API service functions.
  - `styles/`: Global styles and Tailwind CSS configuration.
  - `utils/`: Utility functions.
  - `types/`: TypeScript types for the application.
  - `i18n/`: Internationalization files.

## Testing
To run tests, use:
```
npm test
```
or
```
yarn test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.