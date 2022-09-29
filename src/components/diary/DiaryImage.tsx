import React from 'react';
import { DiaryImageGroup, Image } from './styles';

const DiaryImage = () => {
  return (
    <DiaryImageGroup>
      <Image
        src="https://source.unsplash.com/random/200x200?sig=1"
        alt="diaryPhoto"
        className="diaryPhoto"
      />
      <Image
        src="https://source.unsplash.com/random/200x200?sig=2"
        id="minMediaPhoto"
        alt="diaryPhoto"
        className="diaryPhoto"
      />
    </DiaryImageGroup>
  );
};

export default DiaryImage;
