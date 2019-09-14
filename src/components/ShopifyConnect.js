import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, FormField, TextInput, Button, Text } from 'grommet';
import styled from 'styled-components';
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

const ShopifyConnect = ({ connectToShopify, currPage }) => {
  const onSubmit = (values, { setSubmitting }) => {
    connectToShopify(values.shop, currPage);
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
