const express = require('express')//done
const app = require('./app') //done
const connectDatabase = require('./config/database')
const dotenv = require('dotenv'); //done
// const { path } = require('./app');
const path = require('path');

//setting up config file
dotenv.config({ path: 'config/config.env' }) //done

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})
//connect to Database

connectDatabase() //done
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("mernweb/build"));
//     app.get("*", (req, res) => {
//        res.sendFile(path.resolve(__dirname, "mernweb", "build", "index.html"));
//     });
//  }

// it was for heroku
// if (process.env.NODE_ENV == "production") {
//     app.use(express.static(path.join(__dirname, "build")))
// }
if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "./mernweb/build")))
}
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./mernweb/build/index.html"));
})
// app.use(express.static(path.join(__dirname, "build")))


// it is also heoku setup
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`server is running at ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})