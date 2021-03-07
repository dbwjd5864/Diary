const mongoose = require('mongoose');
const {ToDoListsSchema} = require('./ToDoLists.js');

const Schema = mongoose.Schema;

const ListsDateSchema = new Schema({
    dateWritten: {type:String },
    list:[ToDoListsSchema]
});

const ListsDate = mongoose.model("ToDoList", ListsDateSchema);

module.exports = ListsDate;