import React from "react";
import ReactDOM from "react-dom";
import swal from "sweetalert";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Paypal = ({ price }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      swal("Transacción completada por " + details.payer.name.given_name);
    });
  };

  const onCancel = (data) => {
    swal("Has cancelado la compra");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onCancel={(data) => onCancel(data)}
    />
  );
};

export default Paypal;
