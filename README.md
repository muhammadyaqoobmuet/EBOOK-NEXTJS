# Simple Book Management App

A simple Next.js application built with **TypeScript** and **Node.js** that allows users to **upload**, **download**, and **edit** their uploaded books. This app includes a login feature, ensuring that only authenticated users can download books. Unauthorized users will not be able to access or download any books.

## Features

- **User Authentication**: Users must log in to download or edit books.
- **Upload Books**: Users can upload books to the platform.
- **Download Books**: Users can download books they have uploaded.
- **Edit Books**: Users can edit their previously uploaded books.
- **Secure Access**: Unauthorized users are restricted from downloading or editing books.

## Technologies Used

- **Frontend**: Next.js with TypeScript
- **Backend**: Node.js with Express.js (API routes for user authentication, book uploads, downloads, and editing)
- **Database**: (Optional, you can mention if you're using MongoDB, PostgreSQL, etc.)

## Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/simple-book-management-app.git
cd simple-book-management-app
```

### 2. Install Dependencies

Install both frontend and backend dependencies:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of the project and configure the necessary environment variables:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongo_connection_string
```

### 4. Run the Application

To run the Next.js application in development mode:

```bash
npm run dev
```

This will start the frontend and backend servers.

### 5. Test API Endpoints

The app uses the following API endpoints for uploading, downloading, and editing books:

- **User Login**: `POST /api/auth/login`
- **Upload Book**: `POST /api/books/upload`
- **Download Book**: `GET /api/books/download/:id`
- **Edit Book**: `PUT /api/books/edit/:id`

You can find more details about these API routes in the separate repository covering the backend API:  
[Backend API Repository](https://github.com/muhammadyaqoobmuet/Master-REST-APIs)

## Project Structure

```
/pages
  /api
    auth.js
    books.js
/src
  /components
  /lib
  /pages
```
