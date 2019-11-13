import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import '../assets/styles/Variables.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='card login__container'>
      <h2 className='login__container--title'>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>
          Iniciar sesión
        </button>
        <div className='login__container--remember-me'>
          <label>Recuérdame</label>
          <input type='checkbox' id='cbox1' value='first_checkbox' />

          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Inicia sesión con Google' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Inicia sesión con Twitter' />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        ¿No tienes cuenta? <Link to='/register'>Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;
