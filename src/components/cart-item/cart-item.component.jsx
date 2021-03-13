import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default cartItem;
