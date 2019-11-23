import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CardForm from './CardForm';

class Checkout extends React.Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_LYqOxFkIIxyhjM9WQ2ZcmZsA00QiKPFm23'>
        <div className='Checkout container'>
          <Elements>
            <CardForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;
