import React, { useState } from 'react';
import { Grid, Box, Anchor } from 'grommet';
import Title from './Title';
import Subtitle from './Subtitle';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Welcome = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  return (
    <Grid>
      <Box
        direction='column'
        width='medium'
        margin={{ top: 'large', left: 'xlarge' }}
      >
        <Title level='1' size='1'>
          B2B e-commerce made simple.
        </Title>
        <Subtitle level='2' size='3'>
          Log in or sign up to get started!
        </Subtitle>
        {showLoginForm && (
          <>
            <LoginForm />
            <Anchor
              href='#'
              primary
              label='Already have an account? Sign in instead.'
              margin={{ top: 'medium', bottom: 'medium' }}
              onClick={() => setShowLoginForm(false)}
            />
          </>
        )}
        {!showLoginForm && (
          <>
            <SignupForm />
            <Anchor
              href='#'
              primary
              label="Wait, I don't actually have an account!"
              margin={{ top: 'medium', bottom: 'medium' }}
              onClick={() => setShowLoginForm(true)}
            />
          </>
        )}
      </Box>
    </Grid>
  );
};

export default Welcome;
