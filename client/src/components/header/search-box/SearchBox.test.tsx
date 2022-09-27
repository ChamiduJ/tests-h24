import React from 'react'
import { render } from '@testing-library/react'
import SearchBox from './SearchBox'

test('must contain Input with placeholder "Search"', () => {
  const { getAllByPlaceholderText } = render(<SearchBox />)
  const textBox = getAllByPlaceholderText('Search')
  expect(textBox.length).toBe(1)
  expect(textBox[0]).toBeInTheDocument()
})

test('must contain Button with no Text', () => {
  const { getByRole } = render(<SearchBox />)
  const searchButton = getByRole('button')
  expect(searchButton).toBeInTheDocument()
})
