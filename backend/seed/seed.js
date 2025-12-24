const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { programs, companies } = require('./data');
const Program = require('../models/Program');
const Company = require('../models/Company');

dotenv.config();

// Connect to DB (Allow passing URI via env or default local)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hackathon-hiring-db';

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected');

    // Clear existing data
    await Program.deleteMany({});
    await Company.deleteMany({});

    // Insert new data
    await Program.insertMany(programs);
    await Company.insertMany(companies);

    console.log('Data Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
