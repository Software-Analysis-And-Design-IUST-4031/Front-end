import { useState } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import '@mantine/core/styles.css';
import './Login.css'
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { MantineProvider, Text, Grid, Box, PasswordInput, TextInput } from '@mantine/core';

const Login = () => {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');

const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setUserName(event.target.value);
}

const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event.target.value);
}

  return (
    <MantineProvider>
      <Box
        style={{
          width: '300px',
          height: '451px',
          backgroundSize: 'cover',
          margin: '0 auto',
          marginBottom: '100px',
          paddingTop: '0px',
          paddingLeft: '1px',
          paddingRight: '0px',
          border: '2px solid rgba(0, 0, 0, 0.158)',
          borderRadius: '12px',
          backdropFilter: 'blur(5px) brightness(1)',
          WebkitBackdropFilter: 'blur(7px) brightness(1)',
          boxShadow: '10 4px 8px rbga(0, 0, 0, 10)'
        }}
      >
        <form className='login-form'>
        <h1>Login</h1>
          <Grid justify='left'>
            <Grid.Col span={8}>
              <label>
                <TextInput 
                  label='Username'
                  type='text'
                  name="user_name"
                  value={userName}
                  onChange={handleUsernameChange}
                  placeholder='enter your username'
                  styles={{
                    input: {
                      width: '257px',
                      borderRadius: '7px'
                    },
                    label: {
                      fontSize: '15px',
                      fontWeight: '550',
                      marginBottom: '7px'
                    }}}
                  required
                />
              </label>
            </Grid.Col>
          </Grid>
          <Grid justify='left'>
          <Grid.Col span={8}>
              <label>
                <PasswordInput
                  label="Password"
                  placeholder="enter your password"
                  defaultValue="secret"
                  value={password}
                  onChange={handlePasswordChange}
                  withAsterisk
                  styles={{
                    input: {
                      width: '257px',
                      borderRadius: '7px'
                    },
                    label: {
                      fontSize: '15px',
                      fontWeight: '550',
                      marginBottom: '7px',
                      marginLeft: '0px'
                    },
                    visibilityToggle: {
                      color: 'white',
                      backgroundColor: '#1a31b6',
                      right: -93
                    }
                  }}
                  visibilityToggleButtonProps={({ reveal, size }: {reveal: boolean; size: number}) => reveal ? <EyeOff size={size}/> : <EyeCheck size={size}/>}
                  required
                />
              </label>
            </Grid.Col>
          </Grid>
          <Grid justify='center'>
            <Grid.Col>
            <Button
                variant='contained'
                fullWidth
                sx={{
                  color: 'white',
                  backgroundColor: ' #1a31b6',
                  '&:hover': {
                    backgroundColor: '#f39811'
                  },
                  mt: 0.25,
                  py: 0.7,
                  borderRadius: '7px'
                }}
              > 
                login
              </Button>
            </Grid.Col>
          </Grid>
          <Grid justify='left' gutter={0}>
              <Text size='md' style={{
                color: 'black',
                fontWeight: 'normal'
                }}>
                Don't have an account ? 
              </Text>
              <Link to="/SignUp" style={{
                color: 'blue',
                marginLeft: '5px',
                textDecoration: 'underline',
                display: 'block',
                textAlign: 'right'
              }}>
                SignUp
              </Link>
          </Grid>
        </form>
      </Box>
    </MantineProvider>
  );
}

export default Login