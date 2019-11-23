import React from 'react';
import '../assets/styles/Bootstrap.scss';
import { connect } from 'react-redux';
import swal from 'sweetalert';

const ProductDetail = (props) => {
  const { products } = props;

  function formulario_new(e) {
    window.location.assign('/productFormNew');    
  };

  function edit_product() {
    window.location.assign('/productFormEdit');
  }

  function delete_product() {
    swal({
      title: '¿Estas seguro de eliminar el producto?',
      text: 'Una vez eliminado, no podra recuperar este producto!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Ops! Su producto ha sido eliminado!', {
            icon: 'success',
          });
          window.location.assign('/productDetail');
        } else {
          swal('Tu producto sigue intacto!');
        }
      });
  }
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
                    {products.map((product) => (
                      <div className='col-sm-4'>
                        <div className='thumbnail'>
                          <h1>
                            <img src={product.image} alt='' />
                          </h1>
                          <div className='caption'>
                            <h5>{product.title}</h5>
                            <p>
                              <>
                                <ol>
                                  <li>{product.description}</li>
                                  <li>
$
                                    {product.price}
                                  </li>
                                </ol>
                              </>
                            </p>
                            <p>
                              <a className='btn btn-warning btn-xs' onClick={edit_product}>
                                <span className='glyphicon glyphicon-pencil' />
                              </a>
                              <a className='btn btn-danger btn-xs' onClick={delete_product}>
                                <span className='glyphicon glyphicon-trash' />
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ProductDetail);
