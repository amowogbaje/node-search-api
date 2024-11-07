
# Local Development Setup for Node.js and MongoDB

This README will guide you through the process of setting up and testing the application on your local server using Node.js and MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

1. **Node.js** (v14 or higher) - [Install Node.js](https://nodejs.org/en/)
2. **MongoDB** (installed locally or use a cloud-based solution like MongoDB Atlas) - [Install MongoDB](https://www.mongodb.com/try/download/community)
3. **Postman** (Optional, for API testing) - [Download Postman](https://www.postman.com/downloads/)

## 1. Clone the Repository

If you haven't already, clone the repository from GitHub:

```bash
git clone https://github.com/amowogbaje/node-search-api.git
cd node-search-api
```

## 2. Install Dependencies

After cloning the repository, navigate to the project directory and install the required dependencies:

```bash
npm install
```

## 3. Set Up Environment Variables

To securely store your application configurations like the database URI, you need to set up a `.env` file. 

Create a file named `.env` in the root directory of your project and add the following:

```plaintext
MONGODB_URI=mongodb://localhost:27017/your_database_name
PORT=5000
```

Replace `your_database_name` with the name you want for your local MongoDB database.

## 4. Start MongoDB

If you’re using **MongoDB locally**:

1. Ensure MongoDB is installed and running.
2. To start MongoDB, open a new terminal window and run the following command:

```bash
mongod
```

This will start the MongoDB server on the default port `27017`.

If you are using **MongoDB Atlas** (cloud database), ensure your connection string in `.env` is set accordingly.

## 5. Run the Application Locally

Once everything is set up, you can start your application by running the following command:

```bash
npm run dev
```

This will start the Node.js server on the specified port (default is `3000`). You should see output similar to this:

```bash
Server is running on http://localhost:3000
```

## 6. Test the Application

You can now test your application on your local server.

### Using Postman or CURL for API Testing

 **GET Request** (Example):
   - Endpoint: `GET http://localhost:3000/api/search?query=food&page=1&limit=10`

   **In Postman**:
   - Open Postman.
   - Set the HTTP method to `GET`.
   - Enter the URL `http://localhost:3000/api/search?query=food&page=1&limit=10`.
   - Click "Send" to view the response.



## 7. Stopping the Application

To stop the application, press `Ctrl + C` in the terminal where the server is running.

---

## Conclusion

Now you have a local server running with Node.js and MongoDB! You can continue developing, testing, and making changes locally before deploying to production (Heroku or another platform). If you encounter any issues, feel free to reach out for assistance.

Happy coding! 🎉
