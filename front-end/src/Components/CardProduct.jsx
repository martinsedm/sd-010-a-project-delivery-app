import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Cardproducs.css';

export default function CardProduct({ id, drink, cost, thumb }) {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(cost);

  function increment() {
    setCounter(counter + 1);
    setPrice(counter * cost);
  }

  function decrement() {
    if (counter <= 0) {
      return 0;
    }
    setCounter(counter - 1);
    setPrice(counter - cost);
  }

  return (
    <div key={ id } className="cardProduct">
      <div>
        <p className="unitPrice">{`R$ ${cost}`}</p>
        <img
          className="imageDrinkCard"
          alt="drink"
          data-testid={ `customer_products__element-card-price-${id}` }
          src={ thumb }
        />
      </div>
      <div className="footerCardDrink">
        <h5>{drink}</h5>
        <div className="addQuantities">
          <button
            data-testid={
              `customer_products__button-card-rm-item-${id}`
            }
            onClick={ decrement }
            type="button"
          >
            -

          </button>
          <p
            data-testid={
              `customer_products__input-card-quantity-${id}`
            }
          >
            { counter }

          </p>
          <button
            data-testid={
              `customer_products__button-card-add-item-${id}`
            }
            onClick={ increment }
            type="button"
          >
            {' '}
            +
            {' '}

          </button>
          <div>
            <p>{ price }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  key: PropTypes.string,
  drink: PropTypes.string,
  cost: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
