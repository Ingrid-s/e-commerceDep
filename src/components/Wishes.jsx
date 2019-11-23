import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeToWishes } from '../actions';
import carIcon from '../assets/static/car-icon-b.svg';

const Wishes = (props) => {
  const { wishes } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
    props.removeToWishes(product);
  };

  const handleRemoveToWishes = (product) => {
    props.removeToWishes(product);
  };

  return (
    <section className='container'>
      {wishes.length > 0 ? <h3>Lista de deseos</h3> : <h3>Aun no hay productos en tu lista de deseos</h3>}
      <div className='card-products__items'>
        {wishes.map((product) => (
          <div className='wish-card__item' key={product._id}>
            <div className='wish-card__image'>
              <img alt='Producto' src={product.image} />
            </div>
            <div className='wish-card__info'>
              <p>{product.title}</p>
              <p>
                $
                {' '}
                {product.price}
              </p>
            </div>
            <div className='wish-card__icons'>
              <button type='button' onClick={() => { handleAddToCart(product) ; }}>
                <img src={carIcon} alt='Agregar al carrito' />
              </button>
              <button type='button' onClick={() => handleRemoveToWishes(product)}>
                <p className='delet'> &times;</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    wishes: state.wishes,
  };
};

const mapDispatchToProps = {
  addToCart,
  removeToWishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);

