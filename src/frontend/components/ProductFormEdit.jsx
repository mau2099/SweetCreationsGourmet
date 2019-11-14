/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/Bootstrap.scss';

const ProductFormEdit = () => {

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
                          <button className='btn btn-primary btn-xs'>Actualizar Producto</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <fieldset>
                      <legend>Editar Producto</legend>
                      <div className='row'>

                        <div className='form-group col-md-6'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Nombre del Producto</label>
                          </div>
                          <div className='col-lg-10'>
                            <input type='text' className='form-control' placeholder='Nombre del Producto' />
                          </div>
                        </div>

                        <div className='form-group col-md-6'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Costo del Producto</label>
                          </div>
                          <div className='col-lg-10'>
                            <input type='number' className='form-control' placeholder='$0.00' />
                          </div>
                        </div>

                        <div className='form-group col-md-4'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Cantidad</label>
                          </div>
                          <div className='col-lg-10'>
                            <input type='number' className='form-control' placeholder='Cantidad en Almacen' />
                          </div>
                        </div>

                        <div className='form-group col-md-4'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Sabor</label>
                          </div>
                          <div className='col-lg-10'>
                            <select name='tipo_postre' className='form-control'>
                              <option value=''>Selecciona Sabor...</option>
                              <option value='1'>Fresa</option>
                              <option value='2'>Maracuya</option>
                              <option value='3'>Kiwi</option>
                              <option value='4'>Chocolate</option>
                              <option value='5'>Nuez</option>
                              <option value='6'>Vainilla</option>
                              <option value='7'>Rompope</option>
                            </select>
                          </div>
                        </div>

                        <div className='form-group col-md-4'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Tipo de Postre</label>
                          </div>
                          <div className='col-lg-10'>
                            <select name='tipo_postre' className='form-control'>
                              <option value=''>Tipo de Postre...</option>
                              <option value='1'>Galletas</option>
                              <option value='2'>Muffins</option>
                              <option value='3'>Cupcake</option>
                            </select>
                          </div>
                        </div>

                        <div className='form-group col-md-12'>
                          <div className='col-lg-10'>
                            <label className='control-label'>Descripción del Producto</label>
                          </div>
                          <div className='col-lg-10'>
                            <textarea name='descripción' className='form-control' placeholder='Descripción del Producto' />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <button className='btn btn-primary btn-xs'>Actualizar Producto</button> | <button className='btn btn-warning btn-xs'>Cancelar</button>
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

export default ProductFormEdit;
