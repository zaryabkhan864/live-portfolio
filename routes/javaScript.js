const express = require('express')
const router = express.Router();
const {newCode,javaScriptcode,updateJavaScriptCode,deleteJavaScriptCode,
    javaScripterror,newError,deleteJavaScriptError,
    javaScripttip,newTip,deleteJavaScriptTip} = require('../controllers/javaScriptController');
const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')
// const javaScriptcode = require('../models/javaScriptcode');
router.route('/javaScriptcode').get(javaScriptcode);
router.route('/admin/javaScriptcode/new').post(isAuthenticatedUser,authorizeRoles('admin'),newCode)
router.route('/admin/javaScriptcode/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateJavaScriptCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteJavaScriptCode)
//here are all routes for javaScript error
router.route('/javaScripterror').get(javaScripterror);
router.route('/admin/javaScripterror/new').post(isAuthenticatedUser,authorizeRoles('admin'),newError)
  router.route('/admin/javaScripterror/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateJavaScriptCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteJavaScriptError)
            //here are all routes for javaScript tips
router.route('/javaScripttip').get(javaScripttip);
router.route('/admin/javaScripttip/new').post(isAuthenticatedUser,authorizeRoles('admin'),newTip)
router.route('/admin/javaScripttip/:id')
            // .put(isAuthenticatedUser,authorizeRoles('admin'),updateJavaScriptCode)
            .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteJavaScriptTip)
module.exports = router