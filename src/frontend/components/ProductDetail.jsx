import React from 'react';
import '../assets/styles/Bootstrap.scss';
import swal from 'sweetalert';

const ProductDetail = () => {
  function formulario_new(e) {
    window.location.assign('/productFormNew');
    //swal("Good job!", "You clicked the button!", "success");
  };
  return (
    <div className='block-area wrapper wrapper-content animated fadeInRight'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='ibox float-e-margins'>
            <div className='ibox-title'>
              <div className='ibox-content'>

                <div className='container'>
                  <h2>Productos</h2>
                  <div className='row'>
                    <div className='col-md-12'>
                      <button className='btn btn-primary btn-xs' onClick={formulario_new}>Nuevo Producto</button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='thumbnail'>
                        <h5>IMG</h5>
                        <div className='caption'>
                          <h1>Galletas</h1>
                          <p>
                            <div>
                              <ol>
                                <li>Descripción</li>
                                <li>Costo</li>
                                <li>Cantidad</li>
                              </ol>
                            </div>
                          </p>
                          <p>
                            <a href='' className='btn btn-warning btn-xs'>
                              <span className='glyphicon glyphicon-pencil' />
                            </a>
                            <a href='' className='btn btn-danger btn-xs'>
                              <span className='glyphicon glyphicon-trash' />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='thumbnail'>
                        <h5>IMG</h5>
                        <div className='caption'>
                          <h1>Muffins</h1>
                          <p>
                            <div>
                              <ol>
                                <li>Descripción</li>
                                <li>Costo</li>
                                <li>Cantidad</li>
                              </ol>
                            </div>
                          </p>
                          <p>
                            <a href='' className='btn btn-warning btn-xs'>
                              <span className='glyphicon glyphicon-pencil' />
                            </a>
                            <a href='' className='btn btn-danger btn-xs'>
                              <span className='glyphicon glyphicon-trash' />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='thumbnail'>
                        <h5>IMG</h5>
                        <div className='caption'>
                          <h1>Cupcake</h1>
                          <p>
                            <div>
                              <ol>
                                <li>Descripción</li>
                                <li>Costo</li>
                                <li>Cantidad</li>
                              </ol>
                            </div>
                          </p>
                          <p>
                            <a href='/products/' className='btn btn-warning btn-xs'>
                              <span className='glyphicon glyphicon-pencil' />
                            </a>
                            <a href='' className='btn btn-danger btn-xs'>
                              <span className='glyphicon glyphicon-trash' />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-md-12'>
                      <button className='btn btn-primary btn-xs' onClick={formulario_new}>Nuevo Producto</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
