import React, { useState } from 'react';
import { Form, FormField, TextInput, Button } from 'grommet';

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = evt => {
    evt.preventDefault();
    setIsSubmitting(true);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormField label='Email' htmlFor='signupEmail'>
        <TextInput placeholder='Email address' id='signupEmail' type='email' />
      </FormField>
      <FormField label='Password' htmlFor='signupPassword'>
        <TextInput
          placeholder='A very secure password'
          id='signupPassword'
          type='password'
        />
      </FormField>
      <FormField label='Confirm Password' htmlFor='signupConfirmPassword'>
        <TextInput
          placeholder='So nice, you typed it twice'
          id='signupConfirmPassword'
          type='password'
        />
      </FormField>
      <Button
        type='submit'
        disabled={isSubmitting}
        primary
        label='Let me in!'
      />
    </Form>
  );
};

export default SignupForm;
