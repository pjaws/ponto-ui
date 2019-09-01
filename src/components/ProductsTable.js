import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';

const ProductsTable = ({ products }) => {
  return (
    <Table alignSelf='center'>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Inventory Count</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.inventory_count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;
