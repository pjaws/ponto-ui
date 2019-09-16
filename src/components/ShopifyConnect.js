import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, FormField, TextInput, Button, Text } from 'grommet';
import styled from 'styled-components';
import config from '../utils/config';
import Card from './Card';
import Container from './Container';
import Column from './Column';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ShopifySchema = Yup.object().shape({
  shop: Yup.string()
    .required('Enter your shop name!')
    .min(3, 'That looks too short!'),
});

const ShopifyConnect = ({ accessToken }) => {
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const result = await axios.get(
        `${config.apiBaseUrl}/shopify-connect?shop=${values.shop}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      window.location = result.data.authUrl;
      console.log(result);
      setSubmitting(false);
    } catch (err) {
      setSubmitting(false);
    }
  };
  return (
    <Card>
      <Container justify='center' direction='row'>
        <Column width='33%'>
          <Formik
            initialValues={{ shop: '' }}
            validationSchema={ShopifySchema}
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
                  label='Shop Name'
                  htmlFor='shopifyShopName'
                  error={errors.shop && touched.shop && errors.shop}
                >
                  <StyledInputContainer>
                    <TextInput
                      placeholder='bobs-gifts'
                      id='shopifyShopName'
                      name='shop'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shop}
                    />
                    <Text>.myshopify.com</Text>
                  </StyledInputContainer>
                </FormField>
                <Button primary type='submit' disabled={isSubmitting}>
                  Connect to Shopify
                </Button>
              </Form>
            )}
          </Formik>
        </Column>
      </Container>
    </Card>
  );
};

export default ShopifyConnect;
