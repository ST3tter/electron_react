import React from 'react';
import { Link } from 'react-router-dom';
import ScreenContainer from '../../components/ScreenContainer';

function HomeScreen() {
  return (
    <ScreenContainer>
      <h1>Home</h1>
      <Link to="/test">TEST</Link>
      <br />
      <Link to="/login">Logout</Link>
    </ScreenContainer>
  );
}

export default HomeScreen;
