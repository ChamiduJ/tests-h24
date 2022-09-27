import React from 'react'
import { render } from '@testing-library/react'
import DarkModeSwitch from './DarkModeSwitch'

test('must contain text Dark Mode:', () => {
  const { getByText } = render(<DarkModeSwitch />)
  const text = getByText('Dark Mode:')
  expect(text).toBeInTheDocument()
})
