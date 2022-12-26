const reactSchema = require('../models/reactcode')
const reacterrorSchema = require('../models/reacterror')
const reacttipSchema = require('../models/reacttip')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
exports.newCode =  catchAsyncErrors(async (req,res,next)=>{
    const newcode = await reactSchema.create(req.body);
    res.status(201).json({
        success:true,
        newcode
    })
})
exports.reactcode = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const reactcodesCount = await reactSchema.countDocuments();
    const apiFeatures = new APIFeatures(reactSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const reactcodes = await apiFeatures.query;
    // const topics = await reactSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:reactcodes.length,
            reactcodesCount,
            resPerPage,
            reactcodes
        })
    },2000)
      
})
//Delete Topic => /api/v1/admin/reactcode/:id
exports.deleteReactCode = catchAsyncErrors(async (req,res,next)=>{
    const reactcode = await reactSchema.findById(req.params.id);
    if(!reactcode){
        return res.status(400).json({
            success:false,
            message:'Topic not found'
        })
    }
    await reactcode.deleteOne();
    res.status(200).json({
        success:true,
       message:'React Code is deleted'
    })
})

//here are all controllers for react erros
exports.newError =  catchAsyncErrors(async (req,res,next)=>{
    const newerror = await reacterrorSchema.create(req.body);
    res.status(201).json({
        success:true,
        newerror
    })
})
exports.reacterror = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const reacterrorsCount = await reacterrorSchema.countDocuments();
    const apiFeatures = new APIFeatures(reacterrorSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const reacterrors = await apiFeatures.query;
    // const topics = await reactSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:reacterrors.length,
            reacterrorsCount,
            resPerPage,
            reacterrors
        })
    },2000)
      
})
//Delete Topic => /api/v1/admin/reacterror/:id
exports.deleteReactError= catchAsyncErrors(async (req,res,next)=>{
    const reacterror = await reacterrorSchema.findById(req.params.id);
    if(!reacterror){
        return res.status(400).json({
            success:false,
            message:'Error not found'
        })
    }
    await reacterror.deleteOne();
    res.status(200).json({
        success:true,
       message:'React Error is deleted'
    })
})
//here are all controllers for react tips
exports.newTip =  catchAsyncErrors(async (req,res,next)=>{
    const newtip = await reacttipSchema.create(req.body);
    res.status(201).json({
        success:true,
        newtip
    })
})
exports.reacttip = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const reacttipsCount = await reacttipSchema.countDocuments();
    const apiFeatures = new APIFeatures(reacttipSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const reacttips = await apiFeatures.query;
    // const topics = await reactSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:reacttips.length,
            reacttipsCount,
            resPerPage,
            reacttips
        })
    },2000)
      
})
//Delete React Tip => /api/v1/admin/reacterror/:id
exports.deleteReactTip= catchAsyncErrors(async (req,res,next)=>{
    const reacttip = await reacttipSchema.findById(req.params.id);
    if(!reacttip){
        return res.status(400).json({
            success:false,
            message:'Tip not found'
        })
    }
    await reacttip.deleteOne();
    res.status(200).json({
        success:true,
       message:'React Tip is deleted'
    })
})

