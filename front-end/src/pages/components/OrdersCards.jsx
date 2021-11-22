import React, { useContext, useEffect, useState } from 'react';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleDone from '../../services/fetchSaleDone';
import OrderCard from './OrderCard';

export default function OrdersCards() {
  const { user, sales, setSales } = useContext(ContextDeliveryApp);
  const [isLoading, setIsLoading] = useState(true);

  const getSales = async () => {
    setIsLoading(true);
    const salesList = await fetchSaleDone(user.token);
    const salesComplete = salesList.saleDone.map((sale) => sale);
    setSales(salesComplete);
  };

  useEffect(() => {
    if (sales.length === 0) {
      getSales();
    }
    setIsLoading(false);
  }, [getSales, sales]);

  useEffect(() => {

  }, [sales]);

  if (isLoading) {
    return (
      <h1>loading</h1>
    );
  }
  return (
    <div>
      {
        sales.length && sales.filter((sale) => sale.userId === user.id)
          .map((sale, index) => (
            <OrderCard
              key={ sale.id }
              sale={ sale }
              index={ index }
            />))
      }
    </div>
  );
}
