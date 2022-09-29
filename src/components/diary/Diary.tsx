import { FaHeart } from 'react-icons/fa';
import { DiaryContainer } from './styles';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Diary = () => {
  const [recentDiary, setRecentDiary] = useState('');
  const [newText, setNewText] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getLatestDiary();
  }, []);

  const getLatestDiary = async () => {
    const result = await axios.get('/api/v1/diary/latest');
    let latestOne = '';

    result.data.forEach((display: { diary: string }) => {
      latestOne = display.diary;
    });

    setRecentDiary(latestOne);
  };

  const handleTextSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    handleValidation();
    if (isValid) {
      const newDiary = {
        diary: newText,
      };

      axios
        .post('/api/v1/diary', newDiary)
        .then(() => {
          setRecentDiary(newDiary.diary);
          setNewText('');
          setErrorMessage('');
        })
        .catch(error => console.log(error));
    }
  };

  const handleValidation = () => {
    // Diary Text validation
    if (newText.length < 8) {
      setIsValid(false);
      setErrorMessage('Please enter more than 8 characters');
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setNewText(value);
  };

  return (
    <DiaryContainer>
      <h2 className="diaryHeading">Dear Diary</h2>
      <div className="diaryForm">
        <div className="dearMyself">{recentDiary}</div>
        <form onSubmit={handleTextSubmit}>
          <label className="visually-hidden"> Write your daily diary </label>
          <textarea
            className="text"
            value={newText}
            onChange={handleTextChange}
            placeholder="Write a Daily Diary"></textarea>
          <label className="visually-hidden"> Submit your diary </label>
          <button type="submit" className="submitText">
            <FaHeart aria-hidden="true" />
          </button>
        </form>
        {isValid ? (
          <small className="success">Successfully submitted</small>
        ) : (
          <small className="failure">{errorMessage}</small>
        )}
      </div>
    </DiaryContainer>
  );
};

export default Diary;
