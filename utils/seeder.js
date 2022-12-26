const Topic = require('../models/topics');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const topics = require('../data/topic');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedTopics = async () => {
    try {

        await Topic.deleteMany();
        console.log('Topic are deleted');

        await Topic.insertMany(topics)
        console.log('All Topics are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedTopics()