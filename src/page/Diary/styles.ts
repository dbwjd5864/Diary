import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-rows: 2fr 1fr;
  background: #d5c3b0;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin: 40px;
  max-height: 60vh;
`;
