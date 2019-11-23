import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.svg';
import carIcon from '../assets/static/car-icon.svg';
import heartIcon from '../assets/static/heart-icon.svg';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.changeOpen = this.changeOpen.bind(this);
  }

  changeOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  readCookie(name) {
    return decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${name.replace(/[\-\.\+\*]/g, '\\$&')}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1')) || null;
  }

  isLoggedIn() {
    return this.readCookie('id');
  }

  handleLogout() {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    window.location.href = '/';
  };

  render() {
    const { isOpen } = this.state;

    return (
      <header className='header'>
        <Link to='/'>
          <div className='header__brand'>
            <img className='header__img' src={logo} alt='logoprueba' />
          </div>
        </Link>

        <div className='header__menu'>
          <Link to='/card'>Todos nuestros productos</Link>
        </div>

        {/*
          <div className=' header__search col- col-sm-4 col-md-3 col-lg-3'>
            <input
              type='text'
              className='header__search__input'
              placeholder=' Buscar...'
            />
          </div>
          */}
        <Modal showModal={isOpen} closeCb={this.changeOpen} />
        <div className=' header-icons__menu'>
          {!this.isLoggedIn() && (
            <button type='button' onClick={this.changeOpen}>
              <img src={userIcon} className='header-icons__item' alt='User Icon' />
            </button>
          )}
          {this.isLoggedIn() && (
            <div className='hola'>
              <img src={this.readCookie('image')} className='img-user' alt='User Icon' />
              <p>
                      Hola
                {' '}
                {this.readCookie('name')}
              </p>
              <button type='button' onClick={this.handleLogout} className='login-btn'>
                <p>Log out</p>
              </button>
            </div>
          )}
          <Link to='/shoppingCart'><img src={carIcon} className='header-icons__item' alt='' /></Link>
          {this.props.cart.length > 0 &&
          <div className='header-alert'>{this.props.cart.length}</div>}

          <Link to='/wishes'><img src={heartIcon} className='header-icons__item' alt='' /></Link>
          {this.props.wishes.length > 0 &&
          <div className='header-alert'>{this.props.wishes.length}</div>}
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    wishes: state.wishes,
  };
};

export default connect(mapStateToProps, null)(Header);
