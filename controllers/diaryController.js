const Diary = require('../models/Diary.js');

//Get the latest diary
exports.getDiary = (req, res) =>{
    
    Diary.find({}).sort({_id:-1}).limit(1).exec()
    .then(result =>{
        
        res.status(200).send(result);
    })
    .catch(error=>{
        res.status(404).send("Resource not found."); 
    });
};

//Post the new diary
exports.postDiary = (req, res) =>{
    
    let text = new Diary(req.body);

    text.save()
    .then(result=>{
        res.set('Content-location', `api/v1/diary`);
        
        res.status(201).send({
            url: `/api/v1/diary`,
            data: result
        });
    })
    .catch(error=>{
        res.status(400).send(error); 
    });
};