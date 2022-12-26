const mongoose = require('mongoose')
const nodeerrorSchema = new mongoose.Schema({
errorDescription:{
    type:String,
    required: [true, 'Please enter error description']
},
solution:{
    type:String,
    required: [true, 'Please enter solution']
},

})
module.exports = mongoose.model('Nodeerror', nodeerrorSchema);