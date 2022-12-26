const mongoose = require('mongoose')
const reactcodeSchema = new mongoose.Schema({
codeDescription:{
    type:String,
    required: [true, 'Please enter Code description']
},
code:{
    type:String,
    required: [true, 'Please enter code']
},

})
module.exports = mongoose.model('Reactcode', reactcodeSchema);