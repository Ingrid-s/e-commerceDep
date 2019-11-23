import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import carIcon from '../assets/static/car-icon-b.svg';
import heartIcon from '../assets/static/heart-icon-card.svg';

class Handcrafts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(product) {
    this.props.addToCart(product);
    console.log('handleClick');
  }

  renderProductsList() {
    return this.props.products.map((product) => {

      if (product.categories[0] === 'productos ecológicos' |
          product.categories[0] === 'cuadernos' |
          product.categories[0] === 'accesorios'
      ) {

        return (
          <div className='card-item' key={product._id}>
            <div className='card-item__image'>
              <img alt='Producto' src={product.image} />
            </div>
            <div className='card-item__info'>
              <div className='card-item__product'>
                <h5>
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
                <button type='button' onClick={() => this.handleClick(product)}>
                  <img
                    src={carIcon}
                    alt='Agregar al carrito'
                  />
                </button>
                <img src={heartIcon} alt='Favoritos' />
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className='card-products'>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Handcrafts);
