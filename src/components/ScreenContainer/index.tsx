import React from 'react';
import styled from 'styled-components';

/* Styles */
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: white;
  position: relative;
`;

function ScreenContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default ScreenContainer;
