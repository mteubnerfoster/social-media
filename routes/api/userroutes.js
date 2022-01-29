const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/usercontroller');

router.route('/').get(getAllUsers).post(newUser);

router.route('/:userId').get(getOneUser).post(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').delete(deleteFriend).post(addFriend);

module.exports = router;