const router = require('express').Router();

const { getDiary, postDiary } = require('../controllers/diaryController.js');

router.get('/latest', getDiary).post('/', postDiary);

module.exports = router;
