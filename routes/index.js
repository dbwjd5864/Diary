const router = require('express').Router();

const toDoRouter = require('./toDoLists.js');
const diaryRouter = require('./diary.js');

router.use('/toDoLists', toDoRouter);
router.use('/diary', diaryRouter);

module.exports = router;