# Task Manager

A simple task manager app api using Node.js, Express, MongoDb. This app allows users to create, update, and delete tasks.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Explanation of Files](#explanation-of-files)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or later)
- [Git](https://git-scm.com/)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/anirudh2705/task-manager-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd task-manager
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```
   By default, the server will start on port 3000.

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## API Endpoints
- `GET /api/v1/tasks`: Get all tasks.
- `GET /api/v1/tasks/:id`: Get single task.
- `POST /api/v1/tasks`: Create a new task.
- `PUT /api/v1/tasks/:id`: Update a task.
- `DELETE /api/v1/tasks/:id`: Delete a task by ID.

## Project Structure
task-manager/
├── routes/
├── controller/
├── middleware/
├── db/
├── models/
├── errors/
├── app.js
├── package.json
└── README.md

### Explanation of Files
- **routers/**: Contains the Express route handlers.
- **controllers/**: Contains controllers for route hamdlers.
- **middleware/**: Contains all the middleware.
- **errors/**: Contains custom error files.
- **models/**: Contains the database models.
- **db/**: Contains connection to database.
- **app.js**: Main application file that sets up the Express server.
- **package.json**: Lists project dependencies and scripts.
