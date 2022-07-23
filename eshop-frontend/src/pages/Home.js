import React from 'react';
import { Container } from 'react-bootstrap';
import CardList from '../components/CardList';

function Home({isLoggedIn}) {
  return (
    <Container>
      <h1>Home</h1>
      <CardList isLoggedIn={isLoggedIn} />
    </Container>
  );
}
export default Home;