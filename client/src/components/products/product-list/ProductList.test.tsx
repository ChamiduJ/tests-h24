import React from 'react'
import { render } from '@testing-library/react'
import ProductList from './ProductList'
import { Category } from '../../../types/products.types'

const mockCategories: Category[] = [
  {
    articleCount: 2,
    categoryArticles: {
      articles: [
        {
          images: [{
            path: 'mock-image-path-1'
          }],
          prices: {
            currency: 'EUR',
            regular: {
              value: 55
            }
          },
          name: 'Mock Article Name 1',
          variantName: 'Mock Variant Name 1'
        },
        {
          images: [{
            path: 'mock-image-path-2'
          }],
          prices: {
            currency: 'EUR',
            regular: {
              value: 65
            }
          },
          name: 'Mock Article Name 2',
          variantName: 'Mock Variant Name 2'
        }
      ]
    },
    childrenCategories: {
      list: []
    },
    name: 'Mock Category 1'
  }
]

test('must contain list of Articles', async () => {
  const { getByText } = await render(<ProductList categories={mockCategories} />)
  const item1 = getByText('Mock Article Name 1')
  const item2 = getByText('Mock Article Name 2')

  expect(item1.tagName).toBe('H5')
  expect(item2.tagName).toBe('H5')

  expect(item1).toBeInTheDocument()
  expect(item2).toBeInTheDocument()
})
