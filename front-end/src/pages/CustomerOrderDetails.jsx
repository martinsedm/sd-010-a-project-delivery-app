/* import React, { useContext, useEffect, useState } from 'react';
import ContextDeliveryApp from '../store/ContextDeliveryApp';

function CustomerOrderDetails() {
  const { user, sales, setSales } = useContext(ContextDeliveryApp);
  const [isLoading, setIsLoading] = useState(true);

  const firstLine = async () => (
    <div>
      <h2>Detalhe do Pedido</h2>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          PEDIDO 0003
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vend: Fulana Pereira
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          07/04/2021
        </p>
        <p
          data-testid="customer_order_details__element-order-
          details-label-delivery-status"
        >
          ENTREGUE
        </p>
        <p
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </p>
      </div>
    </div>
  );
}

export default CustomerOrderDetails;
*/
