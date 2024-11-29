# Real-Time Chat Application with File Sharing

This project is a real-time chat application built using **Node.js**, **Express**, **Socket.IO**, and **MongoDB**. It allows users to communicate in chat rooms, share files, and retrieve chat history. The application includes basic authentication, supports efficient file transfers, and is designed for scalability.

---

## Features

1. **Real-Time Communication**
   - Users can join chat rooms and exchange messages in real time using Socket.IO.

2. **File Sharing**
   - Efficient file sharing using Node.js streams and buffers.
   - File uploads and downloads handled asynchronously to avoid blocking the server.

3. **Persistent Storage**
   - Chat messages, user data, and file metadata are stored in MongoDB.
   - Chat history is retrievable when users join a room.

4. **Authentication**
   - JWT-based authentication for sign-up, login, and session management.

5. **Scalability**
   - Handles multiple concurrent users efficiently.
   - Ready for scaling in production with Docker and cloud deployment options.


---

## Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **Docker** (optional for containerization)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/sajidZ-904/Real-Time-Chat-App.git
   cd Real-Time-Chat-App

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the project root
   ```bash
   PORT=<YOUR_SERVER_PORT>
   MONGO_URI=<YOUR_MONGODB_ATLAS_URI>
   JWT_SECRET=<YOUR_JWT_SECRET>
   NODE_ENV=test (for testing purposes)

4. Start the application
   ```bash
   npm run start

5. Access the application at :
   ```bash
   http://localhost:3000
   

6. Unit tests are written using Jest. To run the tests:
   ```bash
   npm test

# Docker Setup

1. Run the app using Docker by running:
   ```bash
   docker-compose up --build
   ```



Due to payment issues, I coudn't deploy the app either on Heroku or on AWS.




