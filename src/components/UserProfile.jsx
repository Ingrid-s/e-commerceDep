import React from 'react';
import userPurple from '../assets/static/user-purple.svg';

const UserProfile = () => (
  <section>
    <div className='user-columns'>
      <div className='user-columns__left'>
        <img className='user-columns__profile' src={userPurple} alt='logouser' />
        <h3 className='user-columns__name'>Mari Paz</h3>
      </div>
      <div className='user-columns__rigth'>
        <div className='user-columns__data'>
          <form className='user-columns__form'>
            <label>
              <input type='text' name='name' placeholder='Nombre' />
            </label>
            <label>
              <input type='email' name='name' placeholder='Apellido' />
            </label>
            <label>
              <input
                type='date'
                name='fecha'
                min='1970-01-01'
                max='2018-12-31'
                step='1'
              />
            </label>
            <input type='submit' value='Actualizar información' className='form__btn' />
          </form>
        </div>
      </div>
    </div>
    <div className='user-address'>
      <h2>Direcciones</h2>
    </div>

  </section>

);

export default UserProfile;
