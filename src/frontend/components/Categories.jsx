import React from 'react';
import '../assets/styles/Bootstrap.scss';

const Categories = ({ children, title }) => {
  return (
    <div className='block-area wrapper wrapper-content animated fadeInRight'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='ibox float-e-margins'>
            <div className='ibox-title'>
              <div className='ibox-content'>

                <div className='container'>
                  <h2>Categorias</h2>
                  <div className='row'>
                    <div className='col-md-12'>
                      <button className='btn btn-primary btn-xs'>Nueva Categoria</button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-md-12'>
                      <table className='table '>
                        <thead>
                          <tr>
                            <th>Nombre</th>
                            <th />
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Galletas</td>
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
                      <button className='btn btn-primary btn-xs'>Nueva Categoria</button>
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

export default Categories;
