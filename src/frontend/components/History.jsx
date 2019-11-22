import React from 'react';
import '../assets/styles/Bootstrap.scss';

const History = () => {
  return (
    <div className='block-area wrapper wrapper-content animated fadeInRight'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='ibox float-e-margins'>
            <div className='ibox-title'>
              <div className='ibox-content'>

                <div className='container'>
                  <h2>Historial de Compras</h2>
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-md-12'>
                      <table className='table '>
                        <thead>
                          <tr>
                            <th>ID de Compra</th>
                            <th>Producto Comprado</th>
                            <th>Fecha de Compra</th>
                            <th>Forma de Pago</th>
                            <th />
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>9999 1000</td>
                            <td>Galletas sabor chocolate</td>
                            <td>15/11/2019</td>
                            <td>Tarjeta</td>
                            <td>
                              <a href='' className='btn btn-warning btn-xs'>
                                <span className='glyphicon glyphicon-pencil' />
                              </a>
                            </td>
                            <td>
                              <a href='' className='btn btn-danger btn-xs'>
                                <span className='glyphicon glyphicon-trash' />
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>9999 1000</td>
                            <td>Galletas sabor chocolate</td>
                            <td>15/11/2019</td>
                            <td>Tarjeta</td>
                            <td>
                              <a href='' className='btn btn-warning btn-xs'>
                                <span className='glyphicon glyphicon-pencil' />
                              </a>
                            </td>
                            <td>
                              <a href='' className='btn btn-danger btn-xs'>
                                <span className='glyphicon glyphicon-trash' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>9999 1001</td>
                            <td>Muffins sabor Kiwi</td>
                            <td>15/11/2019</td>
                            <td>Efectivo</td>
                            <td>
                              <a href='' className='btn btn-warning btn-xs'>
                                <span className='glyphicon glyphicon-pencil' />
                              </a>
                            </td>
                            <td>
                              <a href='' className='btn btn-danger btn-xs'>
                                <span className='glyphicon glyphicon-trash' />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default History;
