const express = require('express')
const router = express.Router();
const {newCode,nodecode,updateNodeCode,deleteNodeCode,
    nodeerror,newError,deleteNodeError,
    nodetip,newTip,deleteNodeTip} = require('../controllers/nodeController');
const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')
// const nodecode = require('../models/nodecode');
router.route('/nodecode').get(nodecode);
router.route('/admin/nodecode/new').post(isAuthenticatedUser,authorizeRoles('admin'),newCode)
router.route('/admin/nodecode/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateNodeCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteNodeCode)
//here are all routes for node error
router.route('/nodeerror').get(nodeerror);
router.route('/admin/nodeerror/new').post(isAuthenticatedUser,authorizeRoles('admin'),newError)
router.route('/admin/nodeerror/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateNodeCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteNodeError)
            //here are all routes for node tips
router.route('/nodetip').get(nodetip);
router.route('/admin/nodetip/new').post(isAuthenticatedUser,authorizeRoles('admin'),newTip)
router.route('/admin/nodetip/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateNodeCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteNodeTip)
module.exports = router