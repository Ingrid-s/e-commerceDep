import React from 'react';
import { Link } from 'react-router-dom';
import curva from '../assets/static/ondita.svg';
import gradiente from '../assets/static/img/gradient.png';

const CategoriesSection = () => (
  <section className='categories-home'>
    <div className='categories-home__content'>
      <h2 className='categories-home__title'>CATEGORÍAS</h2>
      {/*<img src={curva} className='curva' alt='' />*/ }
      <div className='categories-home__cards'>
        <Link to='/clothes'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='demo' className='categories-home__img' />
              <figcaption>
                <h2>
                ROPA
                </h2>

              </figcaption>
            </figure>
          </div>
        </Link>
        <Link to='/babys'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='demo' />
              <figcaption>
                <h2>
               BEBÉS
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>
        <Link to='/handcrafts'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='' />
              <figcaption>
                <h2>
                ARTESANIAS
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>
        <Link to='/food'>
          <div className='categories-home__card'>
            <figure className='image'>
              <img src={gradiente} alt='' />
              <figcaption>
                <h2>
                COMIDA
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>
      </div>
    </div>
    {/*
    <div className='categories-home__btn'>
      <a href='' className='categories-home__text'>Descubre más</a>

    </div>
    */}
  </section>

);

export default CategoriesSection;
