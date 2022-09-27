import React from 'react'
import { formatter } from './common.utils'

test('renders the Footer with correct text', () => {
  const formatted = formatter.format(55);
  expect(formatted).toBe(`55,00${String.fromCharCode(160)}€`)
})
