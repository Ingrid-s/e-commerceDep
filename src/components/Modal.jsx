import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

const Modal = (props) => {
  const { showModal, closeCb } = props;
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  const MODAL = showModal ? (
    <div className='modal' role='dialog'>
      <div className='modal__backdrop' />
      <div className='modal__container' role='document'>
        <button className='modal__close' type='button' onClick={closeCb}>
          &times;
        </button>
        <div className='modal__header'>
          INICIA SESIÓN
        </div>
        <form className='modal__form'>
          <label htmlFor='email' className='modal__label'>Correo electronico</label>
          <input type='text' name='email' id='email' placeholder='correo electronico' onChange={handleInput} />
          <label htmlFor='password' className='modal__label'>Contraseña</label>
          <input type='text' name='password' id='password' placeholder='contraseña' onChange={handleInput} />
          <p><button className='modal__btn' type='submit' onClick={handleSubmit}>Enviar</button></p>
          {/*
          <p>O inicia con</p>
          <p><button type='button' className='modal__btn modal__btn--social'>Facebook</button></p>
          */}
          <a href='/register'>Crea una cuenta</a>
        </form>
      </div>
    </div>

  ) :
    null;

  return (
    MODAL

  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Modal);
