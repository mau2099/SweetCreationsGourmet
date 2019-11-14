import React from 'react';
import '../assets/styles/Bootstrap.scss';

const CategoriesFormNew = ({ children, title }) => {
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
                          <button className='btn btn-primary btn-xs'>Guardar Categoria</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <fieldset>
                      <legend>Nueva Categoria</legend>
                      <div className='row'>

                        <div className='form-group col-md-12'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Nombre de la Categoria</label>
                          </div>
                          <div className='col-lg-10'>
                            <input type='text' className='form-control' placeholder='Nombre de la Categoria' />
                          </div>
                        </div>

                      </div>
                    </fieldset>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <button className='btn btn-primary btn-xs'>Guardar Categoria</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
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

export default CategoriesFormNew;
