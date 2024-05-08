const User_Model = require('../models/userModel')


async function handel_getAll_User(req, res) {
    User_Model.find({})
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.error(err.message);
            res.status(500).json({ error: "Server Error" });
        });
}


async function handel_add_User(req, res) {
    const body = req.body;
    console.log(body);
    if (!body || !body.name || !body.gender || !body.email || !body.country) {
        return res.status(400).json({ error: "Invalid Data" });
    }
    try {
        await User_Model.create({
            name: body.name,
            gender: body.gender,
            email: body.email,
            country: body.country
        });
        return res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
}
async function handel_getUserby_id(req, res) {
    const user = await User_Model.findById(req.params.id);
    if(!user) {
        return res.status(404).json({error: "User not found"});
    }
    return res.json(user)
}


async function handel_deleteUserById(req, res) {
    try {
        const user = await User_Model.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await User_Model.deleteOne({ _id: req.params.id });
        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
}

async function handel_updateUserById(req, res) {
    const body = req.body;
    // console.log(body);
    if (!body || (!body.name && !body.gender && !body.email && !body.country)) {
        return res.status(400).json({ error: "Invalid Data" });
    }
    try {
        const user = await User_Model.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (body.name) user.name = body.name;
        if (body.gender) user.gender = body.gender;
        if (body.email) user.email = body.email;
        if (body.country) user.country = body.country;

        await user.save();
        return res.json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
}

module.exports = {
    handel_getAll_User,
    handel_add_User,
    handel_getUserby_id,
    handel_deleteUserById,
    handel_updateUserById
}
