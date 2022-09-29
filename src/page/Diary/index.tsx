import React from 'react';
import DiaryQuote from '../../components/diary/DiaryQuote';
import { Section, ImageContainer } from './styles';
import DiaryImage from '../../components/diary/DiaryImage';

const Diary = () => {
  return (
    <Section>
      <ImageContainer>
        <DiaryImage />
        <div className="diaryQuote">
          <h2 className="diaryQuote-heading">Quote of the Day</h2>
          <DiaryQuote />
        </div>
      </ImageContainer>

      <Diary />
    </Section>
  );
};

export default Diary;
