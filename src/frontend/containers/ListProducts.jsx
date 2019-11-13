import React from 'react';
import '../assets/styles/App.scss';
import Filter from '../components/Filter';

const ListProducts = () => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <>
      {/* id, image, title, description, price */}
      <h2>Pantalla de Listado de productos</h2>
      <Filter />
    </>
  );
};

export default ListProducts;
