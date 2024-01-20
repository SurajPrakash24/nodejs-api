# NodeJs-Express API with MongoDB and JWT Authentication

This is a simple Node.js Express API that uses MongoDB for data storage and JSON Web Tokens (JWT) for authentication. The API includes user signup, login, and enhanced user filtering based on attributes like `createdAt`, `status` and `lastLogin`.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/downloads/) or any API testing tool


## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-api.git

2. Navigate to the project folder:
   ```bash
   cd nodejs-api

3. Install dependencies:
   ```bash
   npm install

4. Environment Variables:
   
   Create a .env file based on .env.example and set the JWT secret key and MongoDB URL.         
   ```bash
   SECRET_KEY = your jwt secret key
   DATABASE = your mongodb url 

5. Start the server:
   ```bash
   node index.js

6. Use Postman or any API testing tool to interact with the API.


## API Endpoints

#### POST /signup: Create a new user.
<img width="760" alt="signup" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/5a20ac96-33aa-4c9d-9169-7815f54b4a70">


#### POST /login: Log in and receive a JWT token.
<img width="760" alt="login" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/8beaa554-9860-445e-9860-e1c8daa917ad">


#### GET /protected: Access a protected endpoint (requires a valid JWT token).
<img width="760" alt="protected1" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/b11c3c5a-f248-47e7-bb26-d718daea069c">
<img width="760" alt="protected2" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/e0282786-37f5-4da8-9c9e-824725e15dcc">
<img width="760" alt="protected3" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/51a7d09b-2f3d-4310-aec7-d6874b4ba304">


#### GET /users: Retrieve a list of users with optional filters (createdAt, lastLogin, status).
<img width="760" alt="users1" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/2f838a8e-c2b9-4a71-8dcb-56b070ca0efd">
<img width="760" alt="users2" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/0e2d9e82-cc8d-4403-9794-139c0af67f38">
<img width="760" alt="users3" src="https://github.com/SurajPrakash24/node.js-api/assets/105191744/9d805111-3f22-4622-9ba9-2618754c8c95">

