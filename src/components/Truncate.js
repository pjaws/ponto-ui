import React from 'react';

const Truncate = ({ max, children }) => {
  const truncatedChildren =
    children.length > max ? `${children.substring(0, max)}...` : children;

  return <span>{truncatedChildren}</span>;
};

export default Truncate;
