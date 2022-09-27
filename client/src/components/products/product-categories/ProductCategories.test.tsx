import React from 'react'
import { render } from '@testing-library/react'
import ProductCategories from './ProductCategories'
import { Category } from '../../../types/products.types'

const mockCategories: Category[] = [
  {
    articleCount: 2,
    categoryArticles: {
      articles: []
    },
    childrenCategories: {
      list: [
        {
          name: 'Mock Child 1',
          urlPath: 'mock-path-1'
        },
        {
          name: 'Mock Child 2',
          urlPath: 'mock-path-2'
        }
      ]
    },
    name: 'Mock Category 1'
  }
]

test('must contain h3 with text "Kategorien"', () => {
  const { getByText } = render(<ProductCategories categories={mockCategories} />)
  const name = getByText('Kategorien')
  expect(name.tagName).toBe('H3')
  expect(name).toBeInTheDocument()
})


test('must contain list of links with childrenCategories', async () => {
  const { getByText } = await render(<ProductCategories categories={mockCategories} />)
  const item1 = getByText('Mock Child 1')
  const item2 = getByText('Mock Child 2')

  expect(item1.tagName).toBe('A')
  expect(item2.tagName).toBe('A')

  expect(item1).toHaveAttribute('href', '/products/mock-path-1')
  expect(item2).toHaveAttribute('href', '/products/mock-path-2')
})
