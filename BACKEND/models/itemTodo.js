const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  valueProduct: { 
      type: String, 
      required: true, 
      minlength: 1, 
      maxlength: 40, 
    },
    valuePrice: {
      type: Number, 
      required: true, 
      minlength: 1, 
      maxlength: 40, 
    },
    lastName: {
      type: String, 
      required: true, 
      minlength: 1, 
      maxlength: 40, 
    }

  }); 

  module.exports = mongoose.model('item', itemSchema);