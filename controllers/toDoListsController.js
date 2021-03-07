const ListsDate = require('../models/ListsDate.js');
const {ToDoLists} = require('../models/ToDoLists.js');

//Get all the to-do lists
exports.getLists = (req, res) =>{
    
    ListsDate.find({}, {_id:0}).sort({dateWritten:1}).exec()
    .then(results=>{
        
        res.status(200).send(results);
    })
    .catch(error=>{
        res.status(404).send("Resource not found."); 
    });
};

//Get the to-do lists with the passed date value
exports.getList = (req, res) =>{
    
    ListsDate.findOne({'dateWritten': req.params.date}, {_id:0}).exec()
   .then(results =>{

        res.status(200).send(results);
    })
    .catch(error=>{
        res.status(404).send("Resource not found."); 
    });
};

//Post the new to-do list
exports.postList = (req, res) =>{
    
    ListsDate.findOne({dateWritten: req.body.date}).exec()
    .then(result =>{
        if(result == null){
            const newDate = new ListsDate({
                dateWritten: req.body.date
            });
            
            return newDate.save();
        }
        else{
            return result;
        }
    })
    .then(savedDate =>{
        const list1 = new ToDoLists({
            list: req.body.text
        });

        savedDate.list.push(list1);
            
        return savedDate.save();
    })
    .then(savedList =>{
        res.set('Content-location', `api/v1/toDoLists`);
        
        res.status(201).send({
            url: `/api/v1/toDoLists`,
            data: savedList
        });
    })
    .catch(error=>{
        res.status(400).send(error); 
    });
};