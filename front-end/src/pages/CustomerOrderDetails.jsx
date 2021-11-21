import React from 'react';

function CustomerOrderDetails() {
  return (
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
      <div>
        <p>Item</p>
        <p data-testid="customer_order_details__element-order-table-item-number-">
          1
        </p>
        <p>Descricao</p>
        <p data-testid="customer_order_details__element-order-table-name-">
          Cerveja Stella 250ml
        </p>
        <p>Quantidade</p>
        <p data-testid="customer_order_details__element-order-table-quantity-">
          3
        </p>
        <p>Valor Unitário</p>
        <p data-testid="customer_order_details__element-order-table-sub-total-">
          R$3,50
        </p>
        <p>Sub-total</p>
        <p data-testid="customer_order_details__element-order-total-price-">
          R$10,50
        </p>
      </div>
    </div>
  );
}

export default CustomerOrderDetails;
