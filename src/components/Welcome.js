import React, { useState } from 'react';
import { Grid, Box } from 'grommet';
import Title from './Title';
import Subtitle from './Subtitle';
import LoginForm from './LoginForm';

const Welcome = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  return (
    <Grid justify='center'>
      <Box direction='column' width='medium'>
        <Title level='1' size='1'>
          B2B e-commerce made simple.
        </Title>
        <Subtitle level='2' size='3'>
          Log in or sign up to get started!
        </Subtitle>
        {showLoginForm && <LoginForm />}
      </Box>
    </Grid>
  );
};

export default Welcome;
