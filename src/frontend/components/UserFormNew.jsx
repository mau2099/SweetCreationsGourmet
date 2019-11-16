/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/Bootstrap.scss';

const UserFormNew = () => {

  return (
    <div className='block-area wrapper wrapper-content animated fadeInRight'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='ibox float-e-margins'>
            <div className='ibox-title'>
              <div className='ibox-content'>
                <br />
                <br />
                <div className='container'>
                  <form action='' className='form-horizontal'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <button className='btn btn-primary btn-xs'>Nuevo Usuario</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <fieldset>
                      <legend>Nuevo Usuario</legend>
                      <div className='row'>

                        <div className='form-group col-md-6'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Nombre del Usuario</label>
                          </div>
                          <div className='col-lg-10'>
                            <input type='text' className='form-control' placeholder='Nombre del Usuario' />
                          </div>
                        </div>

                        <div className='form-group col-md-6'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Apellidos del Usuario</label>
                          </div>
                          <div className='col-lg-10'>
                            <input type='text' className='form-control' placeholder='Apellidos del Usuario' />
                          </div>
                        </div>


                        <div className='form-group col-md-4'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Perfil</label>
                          </div>
                          <div className='col-lg-10'>
                            <select name='tipo_postre' className='form-control'>
                              <option value=''>Selecciona Perfil...</option>
                              <option value='1'>Administrador</option>
                              <option value='2'>Cliente</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <button className='btn btn-primary btn-xs'>Nuevo Usuario</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFormNew;
