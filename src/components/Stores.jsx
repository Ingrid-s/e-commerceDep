import React from 'react';
import userPurple from '../assets/static/user-purple.svg';
import facebook from '../assets/static/facebook-logo.svg';
import instagram from '../assets/static/instagram-logo.svg';

const Stores = () => (
  <section>
    <div className='stores-column'>
      <div className='stores-column__left'>
        <img className='user-columns__profile' src={userPurple} alt='logouser' />
        <div className='column-social'>
          <h2 className='column-social__title'>Adriana Sánchez </h2>
          <h3>Hobbies</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae voluptatum sed aut.</p>
          <div className='social-networks'>
            <img src={facebook} className='social-networks__icons' alt='' />
            <img src={instagram} className='social-networks__icons' alt='' />
          </div>
        </div>
      </div>
      <div className='stores-column__rigth'>
        <div className='stores-column__trademark'>
          <h2>Maizajo</h2>
          <div>
            aqui van las cards de productos
          </div>
          <h3>Sobre nosotros</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero exercitationem, rerum ut dolore necessitatibus quae autem odit tempore delectus quisquam labore? Blanditiis, cum enim quis error autem eum sapiente!</p>

        </div>

      </div>

    </div>
  </section>
);

export default Stores;
