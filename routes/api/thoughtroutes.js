const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction,
} = require('../../controllers/thoughtcontroller.js');

router.route('/').get(getAllThoughts).post(newThought);

router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)
    .put(newReaction)
    .delete(deleteReaction);

module.exports = router;