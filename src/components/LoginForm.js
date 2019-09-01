import React from 'react';
import { Formik } from 'formik';
import { Form, FormField, TextInput, Button } from 'grommet';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ login }) => {
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await login(values);
      console.log(response);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormField
            label='Email'
            htmlFor='loginEmail'
            error={errors.email && touched.email && errors.email}
          >
            <TextInput
              placeholder='Email address'
              id='loginEmail'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </FormField>
          <FormField
            label='Password'
            htmlFor='loginPassword'
            error={errors.password && touched.password && errors.password}
          >
            <TextInput
              placeholder='A very secure password'
              id='loginPassword'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </FormField>
          <Button
            type='submit'
            disabled={isSubmitting}
            primary
            label='Let me in!'
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
