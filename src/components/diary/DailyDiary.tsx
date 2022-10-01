import { FaHeart } from 'react-icons/fa';
import {
  DiaryContainer,
  DiaryForm,
  DiaryHeader,
  Failure,
  RecentDiary,
  SubmitBtn,
  Success,
  Textarea,
} from './styles';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { handleErrors } from '../../utils/handleErrors';

const DailyDiary = () => {
  const [recentDiary, setRecentDiary] = useState('');
  const [newText, setNewText] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getLatestDiary();
  }, []);

  const getLatestDiary = handleErrors(async () => {
    try {
      const result = await axios.get('/api/v1/diary/latest');

      setRecentDiary(result.data);
    } catch (err) {
      console.error(err);
    }
  });

  const handleTextSubmit = handleErrors(async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (handleValidation()) {
      const newDiary = {
        diary: newText,
      };

      try {
        const result = await axios.post('/api/v1/diary', newDiary);

        setRecentDiary(result.data.diary);
        setNewText('');
        setErrorMessage('');
      } catch (err) {
        console.error(err);
      }
    }
  });

  const handleValidation = () => {
    // Diary Text length validation
    if (newText.length >= 5) {
      return true;
    }

    setIsValid(false);
    setErrorMessage('Please enter more than 5 characters');
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setNewText(value);
  };

  return (
    <DiaryContainer>
      <DiaryHeader>Dear Diary</DiaryHeader>
      <DiaryForm>
        <RecentDiary>{recentDiary}</RecentDiary>
        <form onSubmit={handleTextSubmit}>
          <Textarea
            value={newText}
            onChange={handleTextChange}
            placeholder="Write a Daily Diary"></Textarea>

          <SubmitBtn type="submit">
            <FaHeart aria-hidden="true" />
          </SubmitBtn>
        </form>
        {isValid ? (
          <Success>Successfully submitted</Success>
        ) : (
          <Failure>{errorMessage}</Failure>
        )}
      </DiaryForm>
    </DiaryContainer>
  );
};

export default DailyDiary;
