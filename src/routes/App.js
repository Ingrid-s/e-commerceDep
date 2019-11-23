import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Header from '../components/Header';
import Wishes from '../components/Wishes';
import Checkout from '../components/Checkout';
import Footer from '../components/Footer';
import NotFound from '../containers/NotFound';
import UserProfile from '../components/UserProfile';
import Stores from '../components/Stores';
import Card from '../components/Card';
import Clothes from '../components/Clothes';
import Babys from '../components/Babys';
import Handcrafts from '../components/Handcrafts';
import Food from '../components/Food';
import PurchaseMade from '../components/PurchaseMade';
import ShoppingCart from '../components/ShoppingCart';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/categorias' component={Home} />
      <Route exact path='/wishes' component={Wishes} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/userprofile' component={UserProfile} />
      <Route exact path='/stores' component={Stores} />
      <Route exact path='/card' component={Card} />
      <Route exact path='/shoppingCart' component={ShoppingCart} />
      <Route exact path='/clothes' component={Clothes} />
      <Route exact path='/babys' component={Babys} />
      <Route exact path='/handcrafts' component={Handcrafts} />
      <Route exact path='/food' component={Food} />
      <Route exact path='/purchasemade' component={PurchaseMade} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;

