import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lxzokAb7fA05sljwzlIvcyNY00D8mRBffp';

  const onToken = token => {
    console.log(token);
    alert('Payment successfull');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Clothing Store'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
