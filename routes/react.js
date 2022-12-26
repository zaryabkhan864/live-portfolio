const express = require('express')
const router = express.Router();
const {newCode,reactcode,updateReactCode,deleteReactCode,
    reacterror,newError,deleteReactError,
    reacttip,newTip,deleteReactTip} = require('../controllers/reactController');
const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')
// const reactcode = require('../models/reactcode');
router.route('/reactcode').get(reactcode);
router.route('/admin/reactcode/new').post(isAuthenticatedUser,authorizeRoles('admin'),newCode)
router.route('/admin/reactcode/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateReactCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteReactCode)
//here are all routes for react error
router.route('/reacterror').get(reacterror);
router.route('/admin/reacterror/new').post(isAuthenticatedUser,authorizeRoles('admin'),newError)
router.route('/admin/reacterror/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateReactCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteReactError)
            //here are all routes for react tips
router.route('/reacttip').get(reacttip);
router.route('/admin/reacttip/new').post(isAuthenticatedUser,authorizeRoles('admin'),newTip)
router.route('/admin/reacttip/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateReactCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteReactTip)
module.exports = router