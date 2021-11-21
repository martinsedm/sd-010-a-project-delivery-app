import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* customerOrders */
function OrderCard() {
//  const maxLength = 10;
  return (
    <div>
      {
        //   customerOrders.slice(0, maxLength).map((order, index) => (
        <Link to="customer/orders/1">
          <div>
            <span>Pedido</span>
            <p
              id="name-input"
              data-testeid={ `customer_orders__element-order-id-${1}` }
            >
              {/* order.id */}
              PEDIDO 0001
            </p>
            <p
              data-testeid={ `customer_orders__element-delivery-status-${1}` }
            >
              {/* order.statusOrder */}
              Preparando
            </p>
            <p
              data-testid={ `customer_orders__element-order-date-${1}` }
            >
              {/* order.orderDate */}
              08/04/21
            </p>
            <p>
              {/* order.price */}
              R$23,80
            </p>
          </div>
        </Link>
      }
    </div>
  );
}

OrderCard.propTypes = {
  customerOrders: PropTypes.arrayOf,
}.isRequired;

export default OrderCard;
