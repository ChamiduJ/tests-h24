import React from 'react'
import { render } from '@testing-library/react'
import Logo from './Logo'

test('must contain logo with alt text', () => {
  const { getByAltText } = render(<Logo />)
  const logoImage = getByAltText('Home24 logo')
  expect(logoImage).toBeInTheDocument()
  expect(logoImage).toHaveAttribute('src', `${process.env.PUBLIC_URL}/home-24-logo.svg`)
})
