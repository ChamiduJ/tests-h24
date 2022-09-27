import React from 'react'
import Styled from 'styled-components'

import { Category } from '../../../types/products.types'

interface IProps {
  categories: Category[]
}

const Heading = Styled.h1`
margin: 0 0 10px;
`

export default function ProductsHeading({ categories }: IProps) {
  return (
    <>
      {categories.length ? (
        <Heading>
          {categories[0].name}
          <small> ({categories[0].articleCount})</small>
        </Heading>
      ) : (
        'Loading...'
      )}
    </>
  )
}
