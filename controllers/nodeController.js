const nodeSchema = require('../models/nodecode')
const nodeerrorSchema = require('../models/nodeerror')
const nodetipSchema = require('../models/nodetip')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
exports.newCode =  catchAsyncErrors(async (req,res,next)=>{
    const newcode = await nodeSchema.create(req.body);
    res.status(201).json({
        success:true,
        newcode
    })
})
exports.nodecode = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const nodecodesCount = await nodeSchema.countDocuments();
    const apiFeatures = new APIFeatures(nodeSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const nodecodes = await apiFeatures.query;
    // const topics = await nodeSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:nodecodes.length,
            nodecodesCount,
            resPerPage,
            nodecodes
        })
    },2000)
      
})
//Delete Topic => /api/v1/admin/nodecode/:id
exports.deleteNodeCode = catchAsyncErrors(async (req,res,next)=>{
    const nodecode = await nodeSchema.findById(req.params.id);
    if(!nodecode){
        return res.status(400).json({
            success:false,
            message:'Topic not found'
        })
    }
    await nodecode.deleteOne();
    res.status(200).json({
        success:true,
       message:'Node Code is deleted'
    })
})

//here are all controllers for node erros
exports.newError =  catchAsyncErrors(async (req,res,next)=>{
    const newerror = await nodeerrorSchema.create(req.body);
    res.status(201).json({
        success:true,
        newerror
    })
})
exports.nodeerror = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const nodeerrorsCount = await nodeerrorSchema.countDocuments();
    const apiFeatures = new APIFeatures(nodeerrorSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const nodeerrors = await apiFeatures.query;
    // const topics = await nodeSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:nodeerrors.length,
            nodeerrorsCount,
            resPerPage,
            nodeerrors
        })
    },2000)
      
})
//Delete Topic => /api/v1/admin/nodeerror/:id
exports.deleteNodeError= catchAsyncErrors(async (req,res,next)=>{
    const nodeerror = await nodeerrorSchema.findById(req.params.id);
    if(!nodeerror){
        return res.status(400).json({
            success:false,
            message:'Error not found'
        })
    }
    await nodeerror.deleteOne();
    res.status(200).json({
        success:true,
       message:'Node Error is deleted'
    })
})
//here are all controllers for node tips
exports.newTip =  catchAsyncErrors(async (req,res,next)=>{
    const newtip = await nodetipSchema.create(req.body);
    res.status(201).json({
        success:true,
        newtip
    })
})
exports.nodetip = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 10
    const nodetipsCount = await nodetipSchema.countDocuments();
    const apiFeatures = new APIFeatures(nodetipSchema.find(),req.query)
                                                    .search()
                                                    .filter()
                                                    .pagination(resPerPage)
    const nodetips = await apiFeatures.query;
    // const topics = await nodeSchema.find();
    setTimeout(()=>{
        res.status(200).json({
            success:true,
            count:nodetips.length,
            nodetipsCount,
            resPerPage,
            nodetips
        })
    },2000)
      
})
//Delete Node Tip => /api/v1/admin/nodeerror/:id
exports.deleteNodeTip= catchAsyncErrors(async (req,res,next)=>{
    const nodetip = await nodetipSchema.findById(req.params.id);
    if(!nodetip){
        return res.status(400).json({
            success:false,
            message:'Tip not found'
        })
    }
    await nodetip.deleteOne();
    res.status(200).json({
        success:true,
       message:'Node Tip is deleted'
    })
})

