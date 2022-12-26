const mongoose = require('mongoose')
const nodetipSchema = new mongoose.Schema({
tipDescription:{
    type:String,
    required: [true, 'Please enter tip description']
},
tip:{
    type:String,
    required: [true, 'Please enter tip']
},

})
module.exports = mongoose.model('Nodetip', nodetipSchema);