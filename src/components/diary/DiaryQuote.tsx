import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Quote } from '../../type/Diary';
import {
  DiaryQuoteContainer,
  QuoteContainer,
  DiaryQuoteContent,
  DiaryQuoteAuthor,
} from './styles';

const DiaryQuote = () => {
  const [diaryQuote, setDiaryQuote] = useState<Quote>({
    content: '',
    author: '',
  });

  useEffect(() => {
    getDiaryQuote();
  }, []);

  const getDiaryQuote = async () => {
    const { data } = await axios.get('https://api.quotable.io/random');

    setDiaryQuote({
      content: data.content,
      author: data.author,
    });
  };

  return (
    <DiaryQuoteContainer>
      <h2>Quote of the Day</h2>
      <QuoteContainer>
        <DiaryQuoteContent>{diaryQuote.content}</DiaryQuoteContent>
        <DiaryQuoteAuthor>{diaryQuote.author}</DiaryQuoteAuthor>
      </QuoteContainer>
    </DiaryQuoteContainer>
  );
};

export default DiaryQuote;
