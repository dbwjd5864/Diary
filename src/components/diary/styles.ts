import styled from 'styled-components';

export const DiaryContainer = styled.div`
  padding-top: 20px;
`;

export const DiaryImageGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1.4rem;
`;

export const Image = styled.img`
  width: 77%;
  height: 80%;
`;

export const DiaryQuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QuoteContainer = styled.div`
  line-height: 1.4rem;
  margin: 1rem;
`;

export const DiaryQuoteContent = styled.div`
  border-left: 5px solid #f4ead8;
  padding-left: 8px;
`;

export const DiaryQuoteAuthor = styled.div`
  text-align: end;
  font-weight: 600;
`;
