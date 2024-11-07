import { useState } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import '@mantine/core/styles.css';
import './App.css'
import { EyeCheck, EyeOff } from 'tabler-icons-react';
import { MantineProvider, Text, Grid, Box, PasswordInput, TextInput } from '@mantine/core';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const [isPasswordVisible] = useState(false);
 
  return (
    <MantineProvider>
      <Box 
        style={{
          width: '515px',
          height: '500px',
          backgroundSize: 'cover',
          margin: '0 auto',
          marginBottom: '100px',
          padding: '20px',
          paddingTop: '1px',
          paddingLeft: '7px',
          paddingRight: '9px',
          border: '2px solid rgba(0, 0, 0, 0.158)',
          borderRadius: '12px',
          backdropFilter: 'blur(5px) brightness(1)',
          WebkitBackdropFilter: 'blur(7px) brightness(1)',
          boxShadow: '10 4px 8px rbga(0, 0, 0, 10)'
        }}
      >
        <h1>Sign Up</h1>
        <form className='form'>
          <Grid>
            <Grid.Col span={6}>
            <label>
              <TextInput
                label='Firstname'
                type='text'
                name="first_name"
                value={firstName}
                onChange={handleFirstnameChange}
                placeholder="enter your first name"
                labelProps={{ className:'label-aligned'}}
                styles={{
                  input: {
                    width: '230px',
                    borderRadius: '7px'
                  },
                  label: {
                    fontSize: '15px',
                    fontWeight: '550',
                    marginBottom: '5px',
                    textAlign: "left",
                    marginLeft: '0px'
                  }
                }} 
                required
              />
              </label>
            </Grid.Col>
            <Grid.Col span={6}>
              <label>
                <TextInput 
                  label='Lastname'
                  type='text'
                  name="last_name"
                  value={lastName}
                  onChange={handleLastnameChange}
                  placeholder='enter your last name'
                  labelProps={{ className:'label-aligned'}}
                  styles={{
                    input: {
                      width: '230px',
                      borderRadius: '7px'
                    },
                    label: {
                      fontSize: '15px',
                      fontWeight: '550',
                      marginBottom: '5px',
                      textAlign: "left",
                      marginLeft: '0px'
                    }}}
                  required
                />
              </label>
            </Grid.Col>
          </Grid>
          <Grid justify='left'>
            <Grid.Col span={6}>
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
                      width: '230px',
                      borderRadius: '7px'
                    },
                    label: {
                      fontSize: '15px',
                      fontWeight: '550',
                      marginBottom: '5px'
                    }}}
                  required
                />
              </label>
            </Grid.Col>
            <Grid.Col span={6}>
            <label>
            <TextInput
              label='Email' 
              type='email'
              name="email"
              value={email}
              onChange={handleEmailChange} 
              placeholder='enter your email address'
              styles={{
                input: {
                  width: '230px',
                  borderRadius: '7px'
                },
                label: {
                  fontSize: '15px',
                  fontWeight: '550', 
                  marginBottom: '5px'
                }}}
              required
            />
          </label>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={6}>
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
                      width: '230px',
                      borderRadius: '7px'
                    },
                    label: {
                      fontSize: '15px',
                      fontWeight: '550',
                      marginBottom: '5px',
                      marginLeft: '0px'
                    },
                    visibilityToggle: {
                      color: 'white',
                      backgroundColor: '#1a31b6',
                      right: -5
                    }
                  }}
                  visibilityToggleButtonProps={({ reveal, size }: {reveal: boolean; size: number}) => reveal ? <EyeOff size={size}/> : <EyeCheck size={size}/>}
                  required
                />
              </label>
            </Grid.Col>
            <Grid.Col span={6}>
              <label>
                <PasswordInput 
                  label="Confirm Password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  name="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange} 
                  placeholder='repeat your password'
                  withAsterisk
                  styles={{
                    input: {
                      width: '230px',
                      borderRadius: '7px'
                    },                
                    label: {
                      fontSize: '15px',
                      fontWeight: '550',
                      marginBottom: '5px',
                      marginLeft: '0px',
                      paddingLeft: '0px'
                    },
                    root: {
                      marginLeft: '0px',
                      paddingLeft: '0px'
                    },
                    visibilityToggle: {
                      color: 'white',
                      backgroundColor: '#1a31b6',
                      right: -5
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
                submit
              </Button>
            </Grid.Col>
          </Grid>
          <Grid justify='left' gutter={0}>
              <Text size='md' style={{
                color: 'black',
                fontWeight: 'normal'
                }}>
                Already have an account ?
              </Text>
            <Grid.Col span={1}>
              <Link to="/Login" style={{
                color: 'blue',
                marginLeft: '5px',
                textDecoration: 'underline',
                display: 'block',
                textAlign: 'left',
                left: -1
              }}>
                Login
              </Link>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    </MantineProvider>
  );
}

export default SignUp