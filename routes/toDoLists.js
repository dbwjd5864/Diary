const router = require('express').Router();

const {getLists, getList, postList} = require("../controllers/toDoListsController.js");

router
.get('/', getLists)
.get('/:date', getList)
.post('/', postList);

module.exports = router;