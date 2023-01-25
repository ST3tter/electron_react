import React from 'react';
import { Link } from 'react-router-dom';
import ScreenContainer from '../../components/ScreenContainer';

function TestScreen() {
  return (
    <ScreenContainer>
      <h1>TestScreen</h1>
      <Link to="/">HOME</Link>
    </ScreenContainer>
  );
}

export default TestScreen;
