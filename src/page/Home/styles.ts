import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.pageTitle};
  color: ${props => props.theme.colors.white};
`;

export const Container = styled.li`
  display: flex;
  gap: 5px;
`;

export const HomePageContainer = styled.main`
  ${props => props.theme.common.pageContainer}
  flex-direction: column;
  gap: 10px;
`;
