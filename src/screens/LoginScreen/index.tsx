import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/* Components */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

/* Styles */
const LoginContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 36rem;
    height: 20rem;
    margin-top: 6rem;
    background-image: url(../../assets/st3_holes_color.svg);
    background-repeat: no-repeat;
    background-position: center center;
  }

  .header {
    margin-top: 2rem;
    font-size: 3.3rem;
    font-weight: 300;
    color: #707070;
    user-select: none;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputField = styled(TextField)`
  margin-bottom: 2rem;
`;

const RememberMeCheckbox = styled(FormControlLabel)`
  margin-bottom: 2rem;
  width: 100%;
`;

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const credentialsString = localStorage.getItem('credentials');
    if (credentialsString) {
      const credentials = JSON.parse(credentialsString);
      if (credentials && credentials.rememberMe) {
        setEmail(credentials.email);
        setPassword(credentials.password);
        setRememberMe(credentials.rememberMe);
      }
    }
  }, []);

  const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setEmailCorrect(false);
    } else if (!password) {
      setPasswordCorrect(false);
    } else {
      if (rememberMe) {
        const credentials = { email, password, rememberMe };
        localStorage.setItem('credentials', JSON.stringify(credentials));
      } else {
        localStorage.removeItem('credentials');
      }
      //TODO: Add login logic here
      navigate('/');
    }
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <div className="logo"></div>
        <div className="header">Electron React Template</div>
      </LogoContainer>
      <FormContainer>
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
              e.stopPropagation();
            }
          }}
        >
          <InputField
            label="E-Mail"
            type="email"
            variant="standard"
            error={!emailCorrect}
            autoComplete="username"
            size="small"
            color="success"
            value={email}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setEmailCorrect(true);
              setEmail(target.value);
            }}
            fullWidth
          />
          <InputField
            label="Password"
            type="password"
            variant="standard"
            error={!passwordCorrect}
            autoComplete="current-password"
            size="small"
            color="success"
            value={password}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setPasswordCorrect(true);
              setPassword(target.value);
            }}
            fullWidth
          />
          <RememberMeCheckbox
            control={
              <Checkbox color="secondary" checked={rememberMe} onChange={handleRememberMe} />
            }
            label="Remember me"
          />
          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
}

export default LoginScreen;
