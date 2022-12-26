const mongoose = require('mongoose')


const connectDatabase = () =>{
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     }).then(con=>{
         console.log(`MongoDb is connected with live DB : ${con.connection.host}`)
     })
}



 module.exports = connectDatabase