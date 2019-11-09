import React from "react";
import imgNotFound from "../assets/static/images/404.png";

import "../assets/styles/components/NotFound.scss";

const NotFound = () => {
  return (
    <section className="section404">
      <img
        className="section__img404"
        src={imgNotFound}
        alt="página no encontrada"
      />
      <p className="section__textinfo404">Página no encontrada</p>
    </section>
  );
};

export default NotFound;
