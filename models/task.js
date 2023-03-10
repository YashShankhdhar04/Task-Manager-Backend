const mongoose = require("mongoose");

//creating a schema for the database
//structure for data
// Ptoperties and Types

const TaskSchema = new mongoose.Schema({
  name: {
    //Validation
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    //Validation
    type: Boolean,
    // required : [false],
    default: false,
  },
});

// exporting
module.exports = mongoose.model("Task", TaskSchema);
