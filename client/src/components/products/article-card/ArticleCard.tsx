import React from 'react'
import Styled from 'styled-components'

import { Article } from '../../../types/products.types'
import { formatter } from '../../../utils/common.utils'

interface IProps {
  article: Article
}

const Wrapper = Styled.div`
border: 1px solid lavenderblush;
padding: 10px;
`

const AddToCart = Styled.button.attrs(() => ({
  type: 'button'
}))`
padding: .2em;
background-color: lightgoldenrodyellow;
border: 1px solid lightgray;
cursor: pointer;
text-align: center;
`



export default function ArticleCard({ article }: IProps) {
  return (
    <Wrapper>
      <img alt={article.name} src={article.images[0].path} />
      <h4>{article.name}</h4>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <AddToCart>Add to cart</AddToCart>
    </Wrapper>
  )
}
