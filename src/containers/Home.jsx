import React from 'react';
import Hero from '../components/Hero';
import CategoriesSection from '../components/CategoriesSection';
import FavoriteSection from '../components/FavoriteSection';

const Home = () => (
  <section className='home'>
    <Hero />
    <CategoriesSection />
    <FavoriteSection />
  </section>
);

// export default connect(mapStateToProps, null)(ProductList);

export default Home;

