import React from 'react'
import { render } from '@testing-library/react'
import SearchButton from './SearchButton'

test('must contain Button with no Text', () => {
  const { getByRole } = render(<SearchButton />)
  const searchButton = getByRole('button')
  expect(searchButton).toBeInTheDocument()
})

test('must contain search icon', () => {
  const { getAllByAltText } = render(<SearchButton />)
  const searchIcon = getAllByAltText('search icon')
  expect(searchIcon.length).toBe(1)
  expect(searchIcon[0]).toBeInTheDocument()
})
