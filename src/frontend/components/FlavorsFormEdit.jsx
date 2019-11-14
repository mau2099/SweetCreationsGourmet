import React from 'react';
import '../assets/styles/Bootstrap.scss';

const FlavorFormEdit = () => {
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
                            <button className='btn btn-primary btn-xs'>Actualizar Sabor</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
                          </div>
                        </div>
                      </div>
                      <br />
                      <fieldset>
                        <legend>Editar Sabor</legend>
                        <div className='row'>
  
                          <div className='form-group col-md-12'>
                            <div className='col-lg-10'>
                              <label className='control-label'>Nombre del Sabor</label>
                            </div>
                            <div className='col-lg-10'>
                              <input type='text' className='form-control' placeholder='Nombre del Sabor' />
                            </div>
                          </div>
  
                        </div>
                      </fieldset>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <button className='btn btn-primary btn-xs'>Actualizar Sabor</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
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

export default FlavorFormEdit;
