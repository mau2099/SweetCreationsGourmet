import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/components/Login.scss';
import '../assets/styles/Variables.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const HandleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <section className='login'>
      <section className='card login__container'>
        <h2 className='login__container--title'>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={HandleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={HandleInput}
            required
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={HandleInput}
            required
          />
          <button type='submit' className='button'>
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
          ¿No tienes cuenta? {''}
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};
export default connect(null, mapDispatchToProps)(Login);
