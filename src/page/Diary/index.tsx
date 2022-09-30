import React from 'react';
import DiaryQuote from '../../components/diary/DiaryQuote';
import { Section, ImageContainer } from './styles';
import DiaryImage from '../../components/diary/DiaryImage';
import DailyDiary from '../../components/diary/DailyDiary';

const Diary = () => {
  return (
    <Section>
      <ImageContainer>
        <DiaryImage />
        <DiaryQuote />
      </ImageContainer>

      <DailyDiary />
    </Section>
  );
};

export default Diary;
