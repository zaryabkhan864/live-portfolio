const mongoose = require('mongoose')
const javaScripterrorSchema = new mongoose.Schema({
errorDescription:{
    type:String,
    required: [true, 'Please enter error description']
},
solution:{
    type:String,
    required: [true, 'Please enter solution']
},

})
module.exports = mongoose.model('JavaScripterror', javaScripterrorSchema);