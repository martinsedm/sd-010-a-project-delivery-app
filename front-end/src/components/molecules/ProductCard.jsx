import React, { useContext } from 'react';
import '../../styles/ProductCard.css';
import ProductsContext from '../../context/Products/ProductsContext';

export default function ProductCard() {
  const {
    count,
    increment,
    decrement,
    products,
    BRL,
    handleChange,
  } = useContext(ProductsContext);

  return (
    products.map((prod) => (
      <div key={ prod.id } className="card-container text-black mb-3">
        <div className="card-body product-card-container">
          <h5
            data-testid="customer_products__element-card-title"
            className="card-text"
          >
            {prod.name}
          </h5>
          <div className="card-title">
            <h3
              data-testid="customer_products__element-card-price"
            >
              {BRL(parseFloat(prod.price))}
            </h3>
          </div>
          <img
            data-testid="customer_products__img-card-bg-image"
            src={ prod.urlImage }
            alt={ prod.name }
            style={ { width: 200 } }
          />
        </div>
        <div className="counter-container">
          <button
            name={ prod.id }
            data-testid="customer_products__button-card-add-item"
            className="btn-decrement"
            type="button"
            onClick={ decrement }
          >
            -
          </button>
          <input
            name={ prod.id }
            className="card-header counter"
            value={ count }
            onChange={ ({ target: { value } }) => handleChange(value) }
            data-testid="customer_products__input-card-quantity"
          />
          <button
            name={ prod.id }
            data-testid="customer_products__button-card-rm-item"
            className="btn-increment"
            type="button"
            onClick={ increment }
          >
            +
          </button>
        </div>
      </div>
    ))
  );
}
