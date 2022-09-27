import React from 'react'
import { render } from '@testing-library/react'
import ProductsHeading from './ProductsHeading'
import { Category } from '../../../types/products.types'

const mockCategories: Category[] = [
  {
    articleCount: 2,
    categoryArticles: {
      articles: []
    },
    childrenCategories: {
      list: []
    },
    name: 'Mock Category 1'
  }
]

test('renders a H1 with category name', () => {
  const { getByText } = render(<ProductsHeading categories={mockCategories} />)
  const heading = getByText(mockCategories[0].name)
  expect(heading.tagName).toBe('H1')
  expect(heading).toBeInTheDocument()
})


test('renders a small with article count', () => {
  const { getByText } = render(<ProductsHeading categories={mockCategories} />)
  const articleCount = getByText(`(${mockCategories[0].articleCount})`)
  expect(articleCount).toBeInTheDocument()
})
