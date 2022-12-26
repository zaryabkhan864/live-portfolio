const Topic =  require('../models/topics')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
//Create new Topic => /api/v1/topic/new
exports.newTopic = catchAsyncErrors(async (req,res,next)=>{
    req.body.user = req.user.id;
    const topic = await Topic.create(req.body);
    res.status(201).json({
        success:true,
        topic
    })
})
//get all topics => /api/v1/topics?keyword=node
exports.getTopics = catchAsyncErrors(async (req,res,next)=>{
    const resPerPage = 5
    const topicsCount = await Topic.countDocuments()
    const apiFeatures = new APIFeatures(Topic.find(),req.query)
    .search()
    .filter()
    .pagination(resPerPage)
    const topics = await apiFeatures.query;
    // const topics = await Topic.find();
        res.status(200).json({
        success:true,
        // count:topics.length,
        topicsCount,
        topics
    })
})
// Get single topic details   =>   /api/v1/topic/:id
exports.getSingleTopic = catchAsyncErrors(async (req, res, next) => {

    const topic = await Topic.findById(req.params.id);

    if (!topic) {
        return next(new ErrorHandler('Topic not found',404))
    }
    


    res.status(200).json({
        success: true,
        topic
    })

})
// update topic = /api/v1/topic/:id
exports.updateTopic = catchAsyncErrors(async (req,res,next)=>{
    let topic =await Topic.findById(req.params.id)
    if (!topic) {
        return res.status(404).json({
            success:false,
            message:'Topic not found'
        })
    }
    topic =  await Topic.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success:true,
        topic
    })
})
//Delete Topic => /api/v1/admin/topic/:id
exports.deleteTopic = catchAsyncErrors(async (req,res,next)=>{
    const topic = await Topic.findById(req.params.id);
    if(!topic){
        return res.status(400).json({
            success:false,
            message:'Topic not found'
        })
    }
    await topic.deleteOne();
    res.status(200).json({
        success:true,
       message:'product is deleted'
    })
})
