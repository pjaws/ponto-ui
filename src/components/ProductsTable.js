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
import { Link } from 'react-router-dom';

const ProductsTable = ({ products, linkToProduct }) => {
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
            <TableRow
              key={product.id}
              hover
              onClick={() => linkToProduct(product.id)}
            >
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
  linkToProduct: PropTypes.func.isRequired,
};

export default ProductsTable;
