const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String, // 'Product' or 'Service'
    required: true
  },
  hiring_months: {
    type: [String],
    required: true
  },
  roles: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Company', CompanySchema);
