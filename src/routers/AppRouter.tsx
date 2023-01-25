import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { GlobalStyles } from '../theme/GlobalStyles';
// import PrivateRoute from './PrivateRoute';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import LoginScreen from '../screens/LoginScreen';

/* Styles */
const AppContainer = styled.div`
  height: 100%;
  overflow: hidden;
  background: white;
  border-top: 1px solid #bbbbbb;

  display: flex;
`;

//TODO: Add login logic and use the private route here
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          // <PrivateRoute>
          <HomeScreen />
          // </PrivateRoute>
        }
        path="/"
      />
      <Route
        element={
          // <PrivateRoute>
          <TestScreen />
          // </PrivateRoute>
        }
        path="/test"
      />
      <Route element={<LoginScreen />} path="/login" />
    </>
  )
);

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default AppRouter;
