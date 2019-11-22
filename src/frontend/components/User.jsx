import React from 'react';
import '../assets/styles/Bootstrap.scss';

const Users = () => {
  return (
    <div className='block-area wrapper wrapper-content animated fadeInRight'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='ibox float-e-margins'>
            <div className='ibox-title'>
              <div className='ibox-content'>

                <div className='container'>
                  <h2>Usuarios</h2>
                  <div className='row'>
                    <div className='col-md-12'>
                      <button className='btn btn-primary btn-xs'>Nuevo Usuario</button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-md-12'>
                      <table className='table '>
                        <thead>
                          <tr>
                            <th>Nombre del Usuario</th>
                            <th>Apellido(s)</th>
                            <th>Perfil</th>
                            <th />
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Juan Carlos</td>
                            <td>Lopez</td>
                            <td>Administrador</td>
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
                            <td>Bruce</td>
                            <td>Banner</td>
                            <td>Cliente</td>
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
                  <div className='row'>
                    <div className='col-md-12'>
                      <button className='btn btn-primary btn-xs'>Nuevo Usuario</button>
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

export default Users;
