import React, { useState } from 'react';
import { Grid, Box, Anchor } from 'grommet';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Welcome = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);
  return (
    <Grid>
      <Box
        direction="column"
        width="medium"
        margin={{ top: 'large', left: 'xlarge' }}
      >
        <Title level="1" size="1">
          B2B e-commerce made simple.
        </Title>
        <Subtitle level="2" size="3">
          Log in or sign up to get started!
        </Subtitle>
        {showSignupForm && (
          <>
            <SignupForm />
            <Anchor
              href="#"
              primary
              label="Already have an account? Sign in instead."
              margin={{ top: 'medium', bottom: 'medium' }}
              onClick={() => setShowSignupForm(false)}
            />
          </>
        )}
        {!showSignupForm && (
          <>
            <LoginForm />
            <Anchor
              href="#"
              primary
              label="Wait, I don't actually have an account!"
              margin={{ top: 'medium', bottom: 'medium' }}
              onClick={() => setShowSignupForm(true)}
            />
          </>
        )}
      </Box>
    </Grid>
  );
};

export default Welcome;
