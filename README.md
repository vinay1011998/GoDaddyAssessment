# GoDaddyAssessment

A clean, responsive React application that fetches and displays GoDaddy's GitHub repositories. Browse the complete list of repositories and view detailed information for each one, including descriptions, languages, forks, issues, and more. Built with modern React practices and includes comprehensive testing.

## Features
- Fetch and display GoDaddy's GitHub repositories
- View detailed information about each repository
- Responsive UI built with the Innovaccer Design System
- Custom hooks for efficient data handling
- Routing with `react-router-dom` (v4)
- Comprehensive unit testing with Jest and React Testing Library

## Project Structure
The project is organized into the following directories:

```
├── src
│   ├── components   # UI components (Table, Card, Header)
│   ├── hooks        # Custom hooks
│   ├── utils        # Utility functions (e.g., date formatting)
│   ├── routes       # Routing configurations
│   ├── index.js     # Entry point
│
├── public
│   ├── index.html   # Root HTML file
│
├── assets
│   ├── images       # SVGs and error state images
│
├── __mocks__        # Mock files for Jest tests
│
├── .babelrc         # Babel configuration
├── webpack.config.js # Webpack configuration
├── jest.config.js    # Jest configuration
├── .env             # Environment variables
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## Setup and Installation
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/vinay1011998/GoDaddyAssessment.git
   ```
2. Navigate into the project directory:
   ```sh
   cd GoDaddyAssessment
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application
To start the development server:
```sh
npm run start
```
This runs the app in development mode on **http://localhost:8080**.

## Testing
The project uses **Jest** and **React Testing Library** for unit tests. To execute tests, run:
```sh
npm run test
```

## Key Technologies Used
- **React** (Custom setup with Webpack & Babel)
- **Webpack** (Bundling and environment configurations)
- **Babel** (Transpiling modern JavaScript)
- **Jest** & **React Testing Library** (Unit and integration testing)
- **Innovaccer Design System** (UI components for faster development)
- **React Router v4** (Routing management)
- **dotenv-webpack** (Handling environment variables)
- **HTML Webpack Plugin** (For generating HTML files dynamically)

## Mocking in Jest
For testing, the project includes:
- A `__mocks__` folder for mocking assets (SVGs, images)
- `identity-obj-proxy` for handling CSS imports in tests
- Custom mocks for the Innovaccer Design System components

## Notes
- Ensure `.env` file is correctly set up to provide necessary API URLs.
- The app is configured to run on **port 8080** by default.
- API data is fetched dynamically using `fetch()`.

## Contact
For questions or collaboration, please contact **vinaych1098@gmail.com**.

