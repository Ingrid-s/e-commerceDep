import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import carIcon from '../assets/static/car-icon-b.svg';
import heartIcon from '../assets/static/heart-icon-card.svg';

class Clothes extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(product) {
    this.props.addToCart(product);
    console.log('handleClick');
  }

  renderProductsList() {
    return this.props.products.map((product) => {

      if (product.categories[0] === 'ropa') {

        return (
          <div className='card-item'>
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
        <h2 className='card-products__title'>pensando</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Clothes);
