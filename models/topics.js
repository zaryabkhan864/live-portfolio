const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter topic name'],
        trim: true,
        maxLength: [100, 'topic name cannot exceed 100 characters']
    },
    // price: {
    //     type: Number,
    //     required: [true, 'Please enter product price'],
    //     maxLength: [5, 'Product name cannot exceed 5 characters'],
    //     default: 0.0
    // },
    description: {
        type: String,
        required: [true, 'Please enter topic description'],
    },
    // ratings: {
    //     type: Number,
    //     default: 0
    // },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this topic'],
        enum: {
            values: [
                'Nodejs',
                'React',
                'Express',
                'MongoDB',
                'ASP.NET',
             
            ],
            message: 'Please select correct category for topic'
        }
    },
    link: {
        type: String,
        required: [true, 'Please enter topic link']
    },
    content: {
        type: Number,
        required: [true, 'Please enter topic content'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    // numOfReviews: {
    //     type: Number,
    //     default: 0
    // },
    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: 'User',
    //             required: true
    //         },
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         rating: {
    //             type: Number,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Topic', topicSchema);