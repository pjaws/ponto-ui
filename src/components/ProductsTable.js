import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableBody from './TableBody';
import TableCell from './TableCell';
import Card from './Card';
import Truncate from './Truncate';

const ProductsTable = ({ products }) => {
  return (
    <Card>
      <Table alignSelf='center'>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Total Inventory</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* TODO: calculate inventory from variants */}
          {products.map(product => (
            <TableRow key={product.id} hover>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <Truncate max={60}>{product.description}</Truncate>
              </TableCell>
              <TableCell>86</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;
