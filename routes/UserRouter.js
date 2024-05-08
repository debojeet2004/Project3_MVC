const express = require('express');
const router = express.Router();
const {
    handel_getAll_User,
    handel_add_User,
    handel_getUserby_id,
    handel_deleteUserById,
    handel_updateUserById
} = require('../controllers/Controller');

router.route('/')
    .get(handel_getAll_User)
    .post(handel_add_User);

router.route('/:id')
    .get(handel_getUserby_id)
    .delete(handel_deleteUserById)
    .put(handel_updateUserById);

module.exports = router;

