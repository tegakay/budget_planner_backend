# Budget Planner Backend

This is a CRUD application with authentication for managing a budget planner. The backend is built with Node.js and Express, and it uses MongoDB for data storage.

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete budget items
- Secure password storage with bcrypt
- JWT-based authentication

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/budget-planner-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd budget-planner-backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory
    - Add the following variables:
        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /register` - Register a new user
- `POST /` - Login a user
- `POST /logout` - Logout a user
- `GET /transactions` - Get all budget items
- `POST /transactions` - Create a new budget item
- `PUT /api/budget/:id` - Update a budget item
- `DELETE /api/budget/:id` - Delete a budget item

## License

This project is licensed under the MIT License.