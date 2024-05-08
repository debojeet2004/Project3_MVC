const express = require('express');
const {ConnectDataBase} = require('./Connect_Config');      // Data base connection
const UserRouter = require('./routes/UserRouter');          // Router for the User
const {log_req_res} = require('./middleware/middleware');   // Middleware for logging the request and response 

const app = express();
const port=8000; // PORT for the server

app.use(express.urlencoded({extended: false}));

// CONNECTING THE DATA-BASE
ConnectDataBase('mongodb://localhost:27017/UsersData')

// SETUP for MIDDLEWARE
app.use(log_req_res)

// CONFIGERING THE ROUTES
app.use("/users", UserRouter)

// STARTING THE SERVER
app.listen(port, () => console.log(`Server started 😃 at http://localhost:${port}`));