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

export const DiaryHeader = styled.h2`
  text-align: center;
`;

export const DiaryForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecentDiary = styled.p`
  border-bottom: 3px solid #f4ead8;
  padding: 10px;
`;

export const Textarea = styled.textarea`
  border: none;
  background-color: #f4ead8;
  border-radius: 4px;
  margin-top: 30px;
  width: 70vw;
  margin-left: 30px;
`;

export const SubmitBtn = styled.button`
  border: none;
  background-color: transparent;
  color: indianred;
  font-size: 2em;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Success = styled.span`
  margin-bottom: 20px;
  color: blue;
  font-size: 1.1em;
`;

export const Failure = styled.span`
  margin-bottom: 20px;
  color: red;
  font-size: 1.1em;
`;
