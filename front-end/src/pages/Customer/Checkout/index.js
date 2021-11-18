import React from 'react';
import ProductTable from './components/ProductTable';
import AddressInfo from './components/AddressInfo';
import Navbar from '../../../components/Navbar';
import StyledCheckout from './styles';
import { useProduct } from '../../../contexts/productContext';

const Checkout = () => {
  console.log('');
  const { products, total } = useProduct();
  return (
    <StyledCheckout>
      <Navbar />

      <div className="product-table-container">
        <ProductTable products={ products } />

        <div className="total-container">
          <span>
            Total: R$
            <span data-testid="customer_checkout__element-order-total-price">
              {total}
            </span>
          </span>
        </div>
      </div>

      <AddressInfo />
    </StyledCheckout>
  );
};

export default Checkout;
