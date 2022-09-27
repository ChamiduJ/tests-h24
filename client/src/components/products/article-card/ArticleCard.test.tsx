import React from 'react'
import { render } from '@testing-library/react'
import ArticleCard from './ArticleCard'
import { Article } from '../../../types/products.types'

const mockArticle: Article = {
  images: [{
    path: 'mock-image-path'
  }],
  prices: {
    currency: 'EUR',
    regular: {
      value: 55
    }
  },
  name: 'Mock Article Name',
  variantName: 'Mock Variant Name'
}

test('must contain img with proper alt text and path', () => {
  const { getAllByAltText } = render(<ArticleCard article={mockArticle} />)
  const image = getAllByAltText(mockArticle.name)
  expect(image.length).toBe(1)
  expect(image[0]).toBeInTheDocument()
})

test('must contain h5 with article name', () => {
  const { getByText } = render(<ArticleCard article={mockArticle} />)
  const name = getByText(mockArticle.name)
  expect(name.tagName).toBe('H5')
  expect(name).toBeInTheDocument()
})


test('must contain div with article price', () => {
  const { getByText } = render(<ArticleCard article={mockArticle} />)
  const price = getByText('0,55 €')
  expect(price.tagName).toBe('DIV')
  expect(price).toBeInTheDocument()
})

test('must contain add to cart button', () => {
  const { getByRole } = render(<ArticleCard article={mockArticle} />)
  const addToCart = getByRole('button')
  expect(addToCart.textContent).toBe('Add to cart')
  expect(addToCart).toBeInTheDocument()
})
