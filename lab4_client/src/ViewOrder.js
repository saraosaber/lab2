import OrderItem from "./OrderItem"
import { Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function ViewOrder() {
  const {salads} = useOutletContext();
  const [orderConfirmation, setOrderConfirmation] = useState();

  const handlePlaceOrder = async () => {
    try {
      const orderData = salads.map((salad) => ([
        salad.ingredients.foundation,
        salad.ingredients.protein,
        ...Object.keys(salad.ingredients.extra),
        salad.ingredients.dressing,
      ]));
      const response = await fetch('http://localhost:8080/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (response.ok) {
        const orderConfirmationData = await response.json();
        setOrderConfirmation(orderConfirmationData);
        console.log('Order Confirmation:', orderConfirmationData);
      } else {
        console.error('Failed to place the order.');
      }
    } catch (error) {
      console.error('Error placing the order:', error);
    }
  };
  
  const renderOrderConfirmation = () => {
    if (orderConfirmation) {
      return (
        <div className="toast show">
          <div className="toast-header">
            <strong className="me-auto">Order Confirmation</strong>
          </div>
          <div className="toast-body">
            Status: {orderConfirmation.status}<br />
            Timestamp: {orderConfirmation.timestamp}<br />
            UUID: {orderConfirmation.uuid}<br />
            Price: {orderConfirmation.price}<br />
            Order: {JSON.stringify(orderConfirmation.order)}
          </div>
        </div>
      );
    }
  };


  return (
    
    <>
    <Outlet />
    <br />
      {salads.map((salad,i) =>
        <OrderItem salad={salad} i={i} key={salad.uuid}> </OrderItem>
      )}
    <br />

    <button type='submit' onClick={handlePlaceOrder} className="btn btn-primary" >Lägg beställning</button>
      {renderOrderConfirmation()}
    </>
  )
}