import React from 'react';
import { Formik } from 'formik';
import { Form, FormField, TextInput, Button } from 'grommet';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short!')
    .required('Required'),
});

const SignupForm = ({ signup }) => {
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const result = await signup(values);
      setSubmitting(false);
      console.log(result);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
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
            htmlFor='signupEmail'
            error={errors.email && touched.email && errors.email}
          >
            <TextInput
              placeholder='Email address'
              id='signupEmail'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </FormField>
          <FormField
            label='Password'
            htmlFor='signupPassword'
            error={errors.password && touched.password && errors.password}
          >
            <TextInput
              placeholder='A very secure password'
              id='signupPassword'
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
            label='Sign me up!'
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
