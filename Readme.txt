
# User Management RESTful API

This is a simple RESTful API for managing user data using Node.js and Express.js. It provides basic CRUD (Create, Read, Update, Delete) operations on a collection of users stored in a MongoDB database.

## Getting Started

### Prerequisites

To run this API, you'll need the following software installed on your system:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   cd user-management-api
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and provide the necessary environment variables. For example:

   ```env
   MONGODB_URI=mongodb://localhost/user_database
   PORT=9400
   ```

   Replace `MONGODB_URI` with your MongoDB connection string.

4. Start the server:

   ```bash
   npm start
   ```

   The API will be running at `http://localhost:9400`.

## API Endpoints

### Create a new user

- **URL:** `/users`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "EmailAddress": "user@example.com",
    "BusinessName": "Sample Business",
    "BusinessNumber": "123456789",
    "UniqueCode": "ABC123",
    "ExternalReference": "ext123",
    "PhoneNum": "123-456-7890",
    "HomeAddress": {
      // Define Home Address fields here
    },
    "PostalAddress": {
      // Define Postal Address fields here
    }
  }
  ```

### Retrieve all users

- **URL:** `/users`
- **Method:** `GET`

### Retrieve a specific user by ID

- **URL:** `/users/:id`
- **Method:** `GET`

### Update an existing user by ID

- **URL:** `/users/:id`
- **Method:** `PUT`
- **Request Body:** (Same as create user)

### Delete a user by ID

- **URL:** `/users/:id`
- **Method:** `DELETE`

## Error Handling

- Proper error handling is implemented for various scenarios, including invalid input and database errors.

## Security Measures

- Sensitive data is stored securely in the database.
- Additional security measures can be implemented as needed.

## Documentation

- Detailed API documentation can be found in [Postman].

