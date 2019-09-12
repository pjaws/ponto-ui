import React from 'react';
import { Formik } from 'formik';
import { Form, FormField, TextInput, TextArea, Button } from 'grommet';
import * as Yup from 'yup';
import Card from './Card';
import CardTitle from './CardTitle';
import Container from './Container';
import Column from './Column';
import ProductPriceLevels from './ProductPriceLevels';

const ProductSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string(),
  options: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string(),
        values: Yup.array().of(Yup.string()),
      }),
    )
    .max(3),
  type: Yup.string(),
  tags: Yup.array().of(Yup.string()),
  vendor: Yup.string(),
  variants: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('Required'),
      sku: Yup.string().required('Required'),
      inventoryQuanity: Yup.number().required(),
      position: Yup.number(),
      priceLevels: Yup.array().of(
        Yup.object().shape({
          name: Yup.string(),
          price: Yup.number(),
        }),
      ),
      weight: Yup.number(),
      weightUnits: Yup.string(),
    }),
  ),
});

const ProductForm = ({ product, onSave }) => {
  console.log('ProductForm');
  console.log(product);
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const result = await onSave(values);
      setSubmitting(false);
      console.log(result);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={product}
      validationSchema={ProductSchema}
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
          <Card>
            <CardTitle>Basic Info</CardTitle>
            <Container direction='row'>
              <Column width='50%'>
                <FormField
                  label='Title'
                  htmlFor='productTitle'
                  error={errors.title && touched.title && errors.title}
                >
                  <TextInput
                    placeholder='Awesome Product'
                    id='productTitle'
                    type='text'
                    name='title'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                </FormField>
              </Column>
              <Column width='50%'>
                <FormField
                  label='Product Type'
                  htmlFor='productType'
                  error={errors.type && touched.type && errors.type}
                >
                  <TextInput
                    placeholder='Toys'
                    id='productType'
                    type='text'
                    name='type'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  />
                </FormField>
              </Column>
            </Container>
            <Container direction='row'>
              <Column width='50%'>
                <FormField
                  label='Description'
                  htmlFor='productDescription'
                  error={
                    errors.description &&
                    touched.description &&
                    errors.description
                  }
                >
                  <TextArea
                    placeholder='Tell us about Awesome Product'
                    id='productDescription'
                    type='text'
                    name='description'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                </FormField>
              </Column>
              <Column width='50%'>
                <FormField
                  label='Vendor'
                  htmlFor='productVendor'
                  error={errors.vendor && touched.vendor && errors.vendor}
                >
                  <TextInput
                    placeholder='ACME LLC'
                    id='productVendor'
                    type='text'
                    name='vendor'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.vendor}
                  />
                </FormField>
              </Column>
            </Container>
          </Card>
          <Card>
            <CardTitle>Inventory</CardTitle>
            <Container direction='row'>
              <Column width='33%'>
                <FormField
                  label='SKU'
                  htmlFor='variants[0].sku'
                  //   error={
                  //     errors.variants[0].sku &&
                  //     touched.variants[0].sku &&
                  //     errors.variants[0].sku
                  //   }
                >
                  <TextInput
                    placeholder='AWE-PRO'
                    id='variants[0].sku'
                    type='text'
                    name='variants[0].sku'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.variants[0].sku}
                  />
                </FormField>
              </Column>
              <Column width='33%'>
                <FormField
                  label='Inventory'
                  htmlFor='variants[0].inventoryQuantity'
                  //   error={
                  //     errors.variants[0].inventoryQuanity &&
                  //     touched.variants[0].inventoryQuanity &&
                  //     errors.variants[0].inventoryQuanity
                  //   }
                >
                  <TextInput
                    id='variants[0].inventoryQuantity'
                    type='number'
                    name='variants[0].inventoryQuantity'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.variants[0].inventoryQuanity}
                  />
                </FormField>
              </Column>
            </Container>
          </Card>
          <ProductPriceLevels
            priceLevels={product.variants[0].priceLevels}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            variantIdx={0}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
