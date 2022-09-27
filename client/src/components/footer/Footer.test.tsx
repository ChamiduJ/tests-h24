import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

test('renders the Footer with correct text', () => {
  const { getByText } = render(<Footer />)
  const footerText = getByText('Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.')
  expect(footerText).toBeInTheDocument()
})
