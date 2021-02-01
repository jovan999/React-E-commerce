import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const punlishableKey =
    "pk_test_51IG0JaCxMtpUvbdt0lAInHOmLAA1PxXZ23eFwFk8vTHJlo4Iw2Raxfzr5SO25mX0YX0SUII2hLgfAIhkEnPRCqpy00HWabjitx";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Cloathing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={punlishableKey}
    />
  );
};

export default StripeCheckoutButton;
