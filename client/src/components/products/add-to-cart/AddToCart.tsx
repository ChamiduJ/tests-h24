import React from 'react'
import Styled from 'styled-components'

const CartButton = Styled.button.attrs(() => ({
  type: 'button'
}))`
background: ${({ theme }) => theme.buttonBackground};
border: none;
color: ${({ theme }) => theme.buttonText};
cursor: pointer;
font-weight: bold;
padding: 10px;
text-align: center;
width: 120px;
`

export default function AddToCart() {
  return <CartButton>Add to cart</CartButton>
}
