import React from 'react';
import hero from '../assets/static/hero.png';

const Hero = () => (
  <section className='hero'>
    <div className='hero__column-left'>
      <h1 className='hero__title'>
En
        {' '}
        <span>e-moms</span>
        {' '}
creamos un espacio para impulsar tus sueños.
      </h1>
      <p className='hero__info'>
      Hemos creado un espacio para todas las mujeres que quieran contar su historia y cumplir sus sueños.
      Se una mas de nuestras emprendedoras y permite que tus productos lleguen a miles de personas.
      </p>

    </div>
    <div className='hero__column-rigth'>
      <img src={hero} className='heroimagen' alt='' />
    </div>
  </section>

);

export default Hero;
