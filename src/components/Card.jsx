
import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, addToWishes } from '../actions';
import carIcon from '../assets/static/car-icon-b.svg';
import heartIcon from '../assets/static/heart-icon-card.svg';

class Card extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(product, functionId) {
    if (functionId == 1) {
      this.props.addToCart(product);
    } else if (functionId == 2) {
      console.log('entro a funcion addToWishes');
      this.props.addToWishes(product);
    }

  }

  renderProductsList() {
    return this.props.products.map((product) => {
      return (
        <div className='card-item' key={product._id}>
          <div className='card-item__image'>
            <img alt='Producto' src={product.image} />
          </div>
          <div className='card-item__info'>
            <div className='card-item__product'>
              <h5 className='card-item__description'>
                {product.description}
              </h5>

              <p>{product.title}</p>
              <p>
              $
                {product.price}
              </p>
              <a src='#' />
            </div>
            <div className='card-item__icons'>
              <button type='button' onClick={() => this.handleClick(product, 1)}>
                <img
                  src={carIcon}
                  alt='Agregar al carrito'
                />
              </button>
              <button type='button' onClick={() => this.handleClick(product, 2)}>
                <img src={heartIcon} alt='Favoritos' />
              </button>

            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.products);
    return (
      <div className='card-products'>
        <h2 className='card-products__title'>Conoce todos nuestros productos</h2>
        <div className='card-products__items'>{this.renderProductsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
  addToWishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
