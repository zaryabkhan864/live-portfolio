const javaScriptSchema = require('../models/javaScriptcode')
const javaScripterrorSchema = require('../models/javaScripterror')
const javaScripttipSchema = require('../models/javaScripttip')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
exports.newCode =  catchAsyncErrors(async (req,res,next)=>{
    const newcode = await javaScriptSchema.create(req.body);
    res.status(201).json({
        success:true,
        newcode
    })
})
exports.javaScriptcode = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const javaScriptcodesCount = await javaScriptSchema.countDocuments();
    const apiFeatures = new APIFeatures(javaScriptSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const javaScriptcodes = await apiFeatures.query;
    // const topics = await javaScriptSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:javaScriptcodes.length,
            javaScriptcodesCount,
            resPerPage,
            javaScriptcodes
        })
    },2000)
      
})
//Delete Topic => /api/v1/admin/javaScriptcode/:id
exports.deleteJavaScriptCode = catchAsyncErrors(async (req,res,next)=>{
    const javaScriptcode = await javaScriptSchema.findById(req.params.id);
    if(!javaScriptcode){
        return res.status(400).json({
            success:false,
            message:'Topic not found'
        })
    }
    await javaScriptcode.deleteOne();
    res.status(200).json({
        success:true,
       message:'JavaScript Code is deleted'
    })
})

//here are all controllers for javaScript erros
exports.newError =  catchAsyncErrors(async (req,res,next)=>{
    const newerror = await javaScripterrorSchema.create(req.body);
    res.status(201).json({
        success:true,
        newerror
    })
})
exports.javaScripterror = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const javaScripterrorsCount = await javaScripterrorSchema.countDocuments();
    const apiFeatures = new APIFeatures(javaScripterrorSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const javaScripterrors = await apiFeatures.query;
    // const topics = await javaScriptSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:javaScripterrors.length,
            javaScripterrorsCount,
            resPerPage,
            javaScripterrors
        })
    },2000)
      
})
//Delete Topic => /api/v1/admin/javaScripterror/:id
exports.deleteJavaScriptError= catchAsyncErrors(async (req,res,next)=>{
    const javaScripterror = await javaScripterrorSchema.findById(req.params.id);
    if(!javaScripterror){
        return res.status(400).json({
            success:false,
            message:'Error not found'
        })
    }
    await javaScripterror.deleteOne();
    res.status(200).json({
        success:true,
       message:'JavaScript Error is deleted'
    })
})
//here are all controllers for javaScript tips
exports.newTip =  catchAsyncErrors(async (req,res,next)=>{
    const newtip = await javaScripttipSchema.create(req.body);
    res.status(201).json({
        success:true,
        newtip
    })
})
exports.javaScripttip = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const javaScripttipsCount = await javaScripttipSchema.countDocuments();
    const apiFeatures = new APIFeatures(javaScripttipSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const javaScripttips = await apiFeatures.query;
    // const topics = await javaScriptSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:javaScripttips.length,
            javaScripttipsCount,
            resPerPage,
            javaScripttips
        })
    },2000)
      
})
//Delete JavaScript Tip => /api/v1/admin/javaScripterror/:id
exports.deleteJavaScriptTip= catchAsyncErrors(async (req,res,next)=>{
    const javaScripttip = await javaScripttipSchema.findById(req.params.id);
    if(!javaScripttip){
        return res.status(400).json({
            success:false,
            message:'Tip not found'
        })
    }
    await javaScripttip.deleteOne();
    res.status(200).json({
        success:true,
       message:'JavaScript Tip is deleted'
    })
})

