import styled from 'styled-components';

export const ButtonBase = styled.button<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 32px;
  padding: 0.5rem 0.7rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.backgroundColor !== undefined
      ? props.backgroundColor
      : props.theme.colors.pink};

  border: none;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px ${props => props.theme.colors.pink};
  }
`;
