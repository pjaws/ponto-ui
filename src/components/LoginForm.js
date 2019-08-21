import React, { useState } from 'react';
import { Form, FormField, TextInput, Button } from 'grommet';

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = evt => {
    evt.preventDefault();
    setIsSubmitting(true);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormField label='Email' htmlFor='loginEmail'>
        <TextInput placeholder='Email address' id='loginEmail' type='email' />
      </FormField>
      <FormField label='Password' htmlFor='loginPassword'>
        <TextInput placeholder='Password' id='loginPassword' type='password' />
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

export default LoginForm;
