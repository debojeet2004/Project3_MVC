function log_req_res(req, res, next) {
    // console.log("Middleware is working");
    console.log(`Middleware is working for Method:${req.method}  &  Path:${req.path}`);
    next(); // Pass control to the next middleware
}

module.exports = { log_req_res };