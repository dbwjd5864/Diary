const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let ToDoListsSchema = new Schema({
    list: {type:String, required: true}
});

exports.ToDoLists = mongoose.model('ShowLists', ToDoListsSchema);
exports.ToDoListsSchema = ToDoListsSchema;