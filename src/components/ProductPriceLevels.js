import React from 'react';
import { FormField, TextInput, MaskedInput, Button } from 'grommet';
import Card from '../components/Card';
import Container from './Container';
import Column from './Column';

const ProductPriceLevels = ({
  priceLevels,
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
  variantIdx,
}) => {
  return (
    <Card>
      {priceLevels.map((level, idx) => (
        <Container direction='row' key={idx}>
          <Column width='50%'>
            <FormField
              label='Name'
              htmlFor={`variants[${variantIdx}].priceLevels[${idx}].name`}
              // error={
              //   errors.priceLevels[idx].name &&
              //   touched.priceLevels[idx].name &&
              //   errors.priceLevels[idx].name
              // }
            >
              <TextInput
                id={`variants[${variantIdx}].priceLevels[${idx}].name`}
                type='text'
                name={`variants[${variantIdx}].priceLevels[${idx}].name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.variants[variantIdx].priceLevels[idx].name}
              />
            </FormField>
          </Column>
          <Column width='50%'>
            <FormField
              label='Price'
              htmlFor={`priceLevelPrice${idx}`}
              // error={
              //   errors.priceLevels[idx].price &&
              //   touched.priceLevels[idx].price &&
              //   errors.priceLevels[idx].price
              // }
            >
              <MaskedInput
                mask={[
                  { fixed: '$' },
                  { regexp: /^[0-9]+$/, placeholder: '0' },
                  { fixed: '.' },
                  { regexp: /^[0-9]+$|^[0-9]+$/, placeholder: '00' },
                ]}
                id={`variants[${variantIdx}].priceLevels[${idx}].price`}
                name={`variants[${variantIdx}].priceLevels[${idx}].price`}
                value={values.variants[variantIdx].priceLevels[idx].price}
              />
            </FormField>
          </Column>
        </Container>
      ))}
      <Button label='Add another price level' />
    </Card>
  );
};

export default ProductPriceLevels;
