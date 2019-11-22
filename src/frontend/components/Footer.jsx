import React from 'react';
import '../assets/styles/components/Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='footer'>
    <Link to='/'>Terminos de uso</Link>
    <Link to='/'>Declaración de privacidad</Link>
    <Link to='/'>Centro de ayuda</Link>
  </footer>
);

export default Footer;
