const express = require('express')
const router = express.Router();

const {getTopics,
     newTopic,
    getSingleTopic,
    updateTopic,
    deleteTopic} = require('../controllers/topicController')
    const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')
router.route('/topics').get(getTopics);
router.route('/topic/:id').get(getSingleTopic);

router.route('/admin/topic/new').post(isAuthenticatedUser,authorizeRoles('admin'),newTopic);

router.route('/admin/topic/:id')
            .put(isAuthenticatedUser,authorizeRoles('admin'),updateTopic)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteTopic)

module.exports = router