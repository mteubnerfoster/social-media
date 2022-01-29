const { Reaction, Thought, User } = require('../models')

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
            .populate('thoughts')
            .populate('friends')
        res.json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Get a single user by ID
const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params.id })
            .populate('thoughts')
            .populate('friends')
        if (!oneUser) {
            res.status(404).json({ message: 'This user has not joined.' })
        }
        res.json(oneUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Post a new user
const newUser = async (req, res) => {
    try {
        const User = await User.create(req.body)
        res.json(User)
    } catch (err) {
        res.status(500).json(err)
    }
}

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id },
            req.body)
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Remove a user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id })
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


//---------------Friend Routes---------------//

// POST to add a new friend to a user's friend list
const addFriend = async (req, res) => {
    try {
        const friend = await User.findOneAndUpdate({ _id: req.params.id }, { $push: { friends: req.params.friendId } })
        res.json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// DELETE to remove a friend from a user's friend list

const deleteFriend = async (req, res) => {
    try {
        const friend = await User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } })
        res.json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
}