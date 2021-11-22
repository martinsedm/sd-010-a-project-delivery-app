import React, { useContext/* useEffect  useState */ } from 'react';
import ContextDeliveryApp from '../store/ContextDeliveryApp';

function CustomerOrderDetails() {
  const { sales } = useContext(ContextDeliveryApp);

  const firstLine = async () => (
    <div>
      <h2>Detalhe do Pedido</h2>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${sales.id}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {` P.Vend: ${sales.saleDate}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {sales.saleDate}
        </p>
        <p
          data-testid="customer_order_details__element-order-
          details-label-delivery-status"
        >
          {sales.status}
        </p>
        <button
          type="button"
          disabled
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
      </div>
    </div>
  );

  return (
    firstLine()
  );
}

export default CustomerOrderDetails;
