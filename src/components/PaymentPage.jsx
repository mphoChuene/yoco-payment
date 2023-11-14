import React from "react";

const PaymentPage = () => {
  const payment = () => {
    window.location.href = "https://pay.yoco.com/whit3man";
  };
  return (
    <div>
      <h2>yoco payement gateway</h2>
      <button onClick={payment}>checkout</button>
    </div>
  );
};

export default PaymentPage;
