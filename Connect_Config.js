const mongoose = require('mongoose');

async function ConnectDataBase(url) {
    return mongoose
        .connect(url)
        .then(() => console.log("DataBase is  Connected [MongoDB]"))
        .catch((err) => {console.error("MongoDB Connection Error:", err);
            throw err; // Re-throwing the error to propagate it to the caller
        });
}

module.exports = { ConnectDataBase };