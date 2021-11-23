import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BodySeller() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then(({ data }) => setSales(data))
      .catch(() => console.log('deu ruim'));
  }, []);
  console.log(sales);
  return (
    <div>
      {
        sales.map((sale, index) => (
          <div
            key={ index }
            dataTestId={ `seller_orders__element-order-date-${sale.id}` }
          >
            <p>
              Pedido:
              {' '}
              { sale.id }
            </p>
            { sale.status }
            { sale.Address }
            { sale.totalPrice }
            { sale.saleDate }
          </div>
        ))
      }
    </div>
  );
}
