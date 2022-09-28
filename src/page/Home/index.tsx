import React from 'react';
import { Container, HomePageContainer, Title } from './styles';
import { Link } from 'react-router-dom';
import Button from '../../components/Common/Button';

const Home = () => {
  return (
    <HomePageContainer>
      <Title>How is your day?</Title>
      <Container>
        <Link to="/todo">
          <Button backgroundColor={'#777799'}>To-Do</Button>
        </Link>
        <Link to="/diary">
          <Button backgroundColor={'#777799'}>Diary</Button>
        </Link>
      </Container>
    </HomePageContainer>
  );
};

export default Home;
