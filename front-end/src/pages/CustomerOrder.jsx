import React from 'react';
import OrdersCards from './components/OrdersCards';
// import PropTypes from 'prop-types';
// import Headers from './components/Headers';

function CustomerOrder() {
  return (
    <div>
      <h1>Order Customers</h1>
      {/* <Headers /> */}
      <OrdersCards />
    </div>
  );
}

export default CustomerOrder;
