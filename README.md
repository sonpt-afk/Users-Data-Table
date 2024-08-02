# Random User Table

## Project Overview

This project is a frontend application that displays random user details in a table format. The application fetches data from the Random User API and displays 10 user details at a time with pagination for up to 100 users. The project is built using React, TypeScript, Tailwind CSS.

## Features

- Fetches and displays random user details from the Random User API.
- Implements pagination to display 10 users at a time, up to 100 users.
- Allows sorting on Username and Full Name.
- Uses Tailwind CSS for styling.
- Includes ESLint and Prettier for code quality.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sonpt-afk/twendee-intern-test.git
   cd random-user-table
   ```

2. Install dependencies for the client:

   ```sh
   cd client
   npm install

   ```

3. Install dependencies for the server:

   ```sh
   cd ../server
   npm install

   ```

### Running the Project

1. Start the server:

   ```sh
   npm run dev

   ```

2. Start the client:

   ```sh
   cd ../client
   npm run dev

   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application running.

### Building for Production

To create a production build of the client:

```sh
npm run build
# or
yarn build
```
