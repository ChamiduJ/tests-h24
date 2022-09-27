import React from 'react'
import Styled from 'styled-components'

const StyledFooter = Styled.footer`
background: ${({ theme }) => theme.footerBackground};
margin-top: 20px;
padding: 20px 10px;
text-align: center;
`

export default function Footer() {
  return (
    <StyledFooter>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
    </StyledFooter>
  )
}
