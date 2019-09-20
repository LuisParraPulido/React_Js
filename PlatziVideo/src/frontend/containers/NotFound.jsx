import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <Header />
    <div className='error404'>
      <h1>404</h1>
      <h2>Página no encontrado</h2>
    </div>
  </>
);

export default NotFound;
