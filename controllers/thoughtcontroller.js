const { Thought, User } = require('../models')

// Get all thoughts
const getAllThoughts = async(req, res) => {
    try {
        const allThoughts = await Thought.find()
        res.json(allThoughts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Post new thought
const newThought = async(req, res) => {
    try {
        const thought = await Thought.create(req.body)
        const user = await User.findOneAndUpdate({ username: req.body.username }, { $push: { thoughts: thought._id } })
        res.json({ thought, user })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Get one thought by ID
const getOneThought = async(req, res) => {
    try {
        const oneThought = await Thought.findOne({ _id: req.params.thoughtId })
        res.json(oneThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Update thought by ID
const updateThought = async(req, res) => {
    try {
        const updatedThought = await Thought.findOne({
                _id: req.params.thoughtId
            },
            req.body)
        res.json(updatedThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete thought by ID
const deleteThought = async(req, res) => {
    try {
        const thought = await Thought.findOneandDelete({
            _id: req.params.thoughtId
        })
        res.json(thought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

//-------Reaction Routes -------//

//Post a new reaction
const postReaction = async (req, res) => {
    try{
        const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {reactions: req.body}},
        )
        console.log(reaction)
        res.json(reaction)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

//Delete a reaction
const deleteReaction = async (req, res) => {
    try{
        const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {reactions: req.body}},
        )
        console.log(reaction)
        res.json(reaction)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getAllThoughts,
    newThought,
    getOneThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction
}