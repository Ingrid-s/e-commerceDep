import React from 'react';
import { Redirect } from 'react-router-dom';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { connect } from 'react-redux';
import Axios from 'axios';

const style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

class _CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      paymentSuccesfull: false,
    };
    this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { stripe, cart, totalCart } = this.props;
    stripe
      .createToken()
      .then(({ token }) => {
        return Axios.post('http://e-moms-api.now.sh/api/payments/charge', {
          token_id: token.id,
          amount: totalCart,
          description: `Compra en e-moms por ${cart.length} items`,
        });
      })
      .then(() => {
        this.setState({
          paymentSuccesfull: true,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response ?
            (error.response.data || { error: {} }).error.message :
            error.message || 'Error en el proceso de pago',
        });
        console.error(error, { error });
      });
  }

  render() {
    const { cart } = this.props;
    const { errorMessage, paymentSuccesfull } = this.state;
    if (!cart.length) {
      return <h1>No hay elementos para pagar</h1>;
    }
    if (paymentSuccesfull) {
      return <Redirect to='/purchasemade'><div className='alert success'>Pago realizado exitosamente</div></Redirect>;
    }
    const feedback = errorMessage ? (
      <div className='alert danger'>{errorMessage}</div>
    ) : null;
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <h1>Pagar ahora</h1>
        {feedback}
        {/* eslint-disable-next-line */}
        <label htmlFor="card-elemnt" className="block">
          Detalles de la tajeta
          <CardElement
            id='card-elemnt'
            className='MyCardElement'
            style={style}
          />
        </label>
        <button className='form__btn' type='submit'>
          Pagar
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCart: state.totalCart,
  };
};
const CardForm = injectStripe(
  connect(mapStateToProps, {
    pure: false,
  })(_CardForm),
);

export default CardForm;
