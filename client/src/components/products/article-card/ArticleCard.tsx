import React from 'react'
import Styled from 'styled-components'

import { Article } from '../../../types/products.types'
import { formatter } from '../../../utils/common.utils'
import AddToCart from '../add-to-cart/AddToCart'

interface IProps {
  article: Article
}

const Wrapper = Styled.div`
box-shadow: ${({ theme }) => theme.articleShadow};
overflow: hidden;
padding: 10px;
`

const ImageWrapper = Styled.div`
align-items: center;
display: flex;
height: 180px;
justify-content: center;
`

const Image = Styled.img`
max-height: 100%;
max-width: 100%;
`

const Title = Styled.h5`
height: 35px;
`

const Bottom = Styled.div`
align-items: center;
display: flex;
flex-direction: row;
gap: 10px;
justify-content: space-between;
`

export default function ArticleCard({ article }: IProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image alt={article.name} src={article.images[0].path} />
      </ImageWrapper>
      <Title>{article.name}</Title>

      <Bottom>
        <div>{formatter.format(article.prices.regular.value / 100)}</div>
        <AddToCart />
      </Bottom>
    </Wrapper>
  )
}
