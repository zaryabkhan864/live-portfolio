const mongoose = require('mongoose')
const nodecodeSchema = new mongoose.Schema({
codeDescription:{
    type:String,
    required: [true, 'Please enter Code description']
},
code:{
    type:String,
    required: [true, 'Please enter code']
},

})
module.exports = mongoose.model('Nodecode', nodecodeSchema);