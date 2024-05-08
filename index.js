const express = require('express');
const UserRouter = require('./routes/UserRouter');
const {ConnectDataBase} = require('./Connect_Config');

const {log_req_res} = require('./middleware/middleware');
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