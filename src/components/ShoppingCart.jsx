import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct, plusQuantity, minusQuantity } from '../actions';
import plus from '../assets/static/icon-plus.svg';
import minus from '../assets/static/icon-minus.svg';

const ShoppinCart = (props) => {
  const { cart, totalCart } = props;

  const handleDeleteProduct = (item) => {
    props.deleteProduct(item);
  };

  const handlePlusQuantity = (product) => {
    props.plusQuantity(product);
  };

  const handleMinusQuantity = (product) => {
    props.minusQuantity(product);
  };

  return (
    <div className='container'>
      {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}

      <div className='columns'>
        <div className='cart'>
          <div className='cart_container'>
            {cart.map((item) => (
              <div className='cart-item' key={item._id}>
                <div className='cart-element'>
                  <span className='cart-element__image'>
                    <img alt='Producto' src={item.image} />
                  </span>
                  <span className='cart-element__title'>
                    <h5>{item.title}</h5>
                  </span>
                  <span className='element-quantity'>

                    <span className='element-quantity__icons'>
                      <button
                        className='element-button'
                        type='button'
                        onClick={() => handlePlusQuantity(item)}
                      >
                        <img src={plus} alt='Agregar' />
                      </button>
                      <h4>{item.quantity}</h4>
                      <button
                        className='element-button'
                        type='button'
                        onClick={() => handleMinusQuantity(item)}
                      >
                        <img src={minus} alt='Eliminar' />
                      </button>
                    </span>
                  </span>
                  <span className='cart-element__price'>
                    {`$${item.price}`}
                  </span>
                  <span className='cart-element__new'>
                    {`$${item.newPrice}`}
                  </span>
                  <span>
                    <button
                      className='element-button'
                      type='button'
                      onClick={() => handleDeleteProduct(item)}
                    >
                      <p className='delet'> &times;</p>
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className='total_container'>
              <h3>Precio Total:</h3>
              <h4>
                {`$${totalCart}`}
              </h4>

              <div className='cart-checkout'>
                <Link to='/checkout'>
                  <button
                    type='submit'
                    className='form__btn'
                    id='/'
                  >
                    Proceder con el pago
                  </button>

                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCart: state.totalCart,
  };
};

const mapDispatchToProps = {
  deleteProduct,
  plusQuantity,
  minusQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppinCart);
