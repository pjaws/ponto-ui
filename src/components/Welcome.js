import React, { useState } from 'react';
import { Grid, Box, Heading } from 'grommet';
import LoginForm from './LoginForm';

const Welcome = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  return (
    <Grid justify='center'>
      <Box direction='column' width='medium'>
        <Heading margin='none' textAlign='center'>
          B2B e-commerce made simple.
        </Heading>
        <Heading level='2' textAlign='center' size='small'>
          Log in or sign up to get started!
        </Heading>
        {showLoginForm && <LoginForm />}
      </Box>
    </Grid>
  );
};

export default Welcome;
