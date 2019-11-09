import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import "../assets/styles/Variables.scss";

const Register = () => (
  <section className="register">
    <section className="card register__container ">
      <h2 className="register__container--title">Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button" type="button">
          Registrarme
        </button>
      </form>
      <Link to="/login">¿Ya tienes cuenta? Iniciar sesión</Link>
    </section>
  </section>
);

export default Register;
