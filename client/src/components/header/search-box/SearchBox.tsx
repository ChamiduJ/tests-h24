import React, { ChangeEvent, useContext, useState } from 'react'
import Styled from 'styled-components'
import SearchButton from '../search-button/SearchButton'
import { ProductsContext } from '../../../App'
import { IProductsContext } from '../../../types/products.types'
import { useDebouncedEffect } from '../../../hooks/useDebouncedEffect'

const Wrapper = Styled.div`
position: relative;
`

const Input = Styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search'
}))`
border: solid 1px #aaa;
border-radius: 5px;
box-sizing: border-box;
height: 32px;
padding: 0 10px;
`

export default function SearchBox() {
  const [searchText, setSearchText] = useState<string>('')
  const { categoriesData, setCategoriesData } = useContext<IProductsContext>(ProductsContext)

  const filterProducts = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  useDebouncedEffect(
    () => {
      setCategoriesData(({ original }) => ({
        original: original,
        filtered: original.map((category) => ({
          ...category,
          categoryArticles: {
            articles: category.categoryArticles.articles.filter(
              (article) => article.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            )
          }
        }))
      }))
    },
    300,
    [searchText]
  )

  return (
    <Wrapper>
      <Input onChange={filterProducts} value={searchText} />
      <SearchButton />
    </Wrapper>
  )
}
