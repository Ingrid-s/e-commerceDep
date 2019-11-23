import React from 'react';
import madeIcon from '../assets/static/made-icon.svg';
import shippingIcon from '../assets/static/shipping-icon.svg';
import paymetIcon from '../assets/static/paymet-icon.svg';

const FavoriteteSection = () => (
  <section className='favorite-home'>
    <div className='favorite-home__content'>
      <h2 className='favorite-home__title'>BENEFICIOS DE COMPRAR CON NOSOTRAS</h2>
      <div className='favorite-home__columns'>
        <div className='favorite-home__column'>
          <h5>Envios confiables</h5>
          <img src={shippingIcon} className='favorite-home__icon' alt='Shipping Icon' />

        </div>
        <div className='favorite-home__column bordercol'>
          <h5>Pagos fáciles y seguros</h5>
          <img src={paymetIcon} className='favorite-home__icon' alt='Paymet Icon' />
        </div>
        <div className='favorite-home__column'>
          <h5>Productos hechos con amor</h5>
          <img src={madeIcon} className='favorite-home__icon' alt='Made Icon' />
        </div>

      </div>

    </div>
  </section>

);

export default FavoriteteSection;
