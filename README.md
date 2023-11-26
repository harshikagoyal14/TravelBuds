# TravelBud

TravelBud is a ride-sharing web application that connects travelers with drivers heading in the same direction. It provides a convenient platform for users to share rides, split costs, and reduce their carbon footprint.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Ride Sharing**: Connect with passengers heading to the same destination.
- **Cost Splitting**: Share travel expenses with fellow travelers.
- **Real-time Updates**: Receive real-time updates on ride availability and status.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/phonebook-app.git
    ```

2. Install dependencies:

    ```bash
    cd frontend
    npm install
    cd backend
    npm install
    ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and add the following:

    ```env
    PORT=3001
    MONGO_URI=mongodb+srv://your-mongodb-uri
    GMAIL_USER=your-email@gmail.com
    GMAIL_PASSWORD=your-email-password
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

Visit http://localhost:3001 in your web browser to access the TravelBud. Use the API endpoints for programmatic access.

## API Endpoints

- **GET /api/user**: Get all users.
- **GET /api/user/:id**: Get a user by ID.
- **POST /api/user**: Create a new user.
- **PUT /api/user/:id**: Update a user by ID.
- **DELETE /api/user/:id**: Delete a user by ID.
- **GET /api/card**: Get all contact cards.
- **GET /api/card/:id**: Get a contact card by ID.
- **POST /api/card**: Create a new contact card.
- **PUT /api/card/:id**: Update a contact card by ID.
- **DELETE /api/card/:id**: Delete a contact card by ID.
- **POST /send-email**: Send an email.

## Environment Variables

- **PORT**: The port on which the server runs.
- **MONGO_URI**: MongoDB connection string.
- **GMAIL_USER**: Gmail account used for sending emails.
- **GMAIL_PASSWORD**: Password for the Gmail account.

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License.
