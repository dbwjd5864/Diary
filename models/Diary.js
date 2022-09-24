const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiaryShema = new Schema({
  diary: { type: String, required: true },
});

const Diary = mongoose.model('Diary', DiaryShema);

module.exports = Diary;
