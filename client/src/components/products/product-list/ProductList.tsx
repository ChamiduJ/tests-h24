import React from 'react'
import Styled from 'styled-components'

import ArticleCard from '../article-card/ArticleCard'
import { Category } from '../../../types/products.types'

interface IProps {
  categories: Category[]
}

const Articles = Styled.div`
display: grid;
grid-gap: 26px;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
padding-right: 10px;

@media screen and (max-width: 1200px) {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) );
}

@media screen and (max-width: 992px) {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) );
}

@media screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr) );
}
`

export default function ProductList({ categories }: IProps) {
  return (
    <Articles>
      {
        categories.map((category) =>
          category.categoryArticles.articles.map((article) => <ArticleCard key={article.name} article={article} />)
        )
      }
    </Articles>
  )
}
