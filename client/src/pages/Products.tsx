import React, { useEffect, useContext } from 'react'
import Styled from 'styled-components'

import { IProductsContext } from '../types/products.types'
import ProductsCategories from '../components/products/product-categories/ProductCategories'
import ProductsHeading from '../components/products/products-heading/ProductsHeading'
import ProductList from '../components/products/product-list/ProductList'
import { ProductsContext } from '../App'
import { loadProducts } from '../utils/products.utils'

const Main = Styled.main`
display: grid;
grid-gap: 0 20px;
grid-template-columns: 160px auto;
grid-template-areas: 'sidebar content';
`

const Content = Styled.div  `
grid-area: content;
grid-column: span 2;
`

export default function Products() {
  const { categoriesData, setCategoriesData } = useContext<IProductsContext>(ProductsContext)

  useEffect(() => {
    loadProducts().then(
      (response) => {
        const categories = response?.data?.categories[0] ? response.data.categories : []

        setCategoriesData({
          original: categories,
          filtered: categories
        })
      }
    )
  }, [setCategoriesData])

  return (
    <Main>
      <ProductsCategories categories={categoriesData.original} />

      <Content>
        <ProductsHeading categories={categoriesData.original} />
        <ProductList categories={categoriesData.filtered} />
      </Content>
    </Main>
  )
}
