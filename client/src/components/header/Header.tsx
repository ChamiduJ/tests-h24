import React from 'react'
import Styled from 'styled-components'

import Logo from './logo/Logo'
import SearchBox from './search-box/SearchBox'

const StyledHeader = Styled.header`
background-color: lightblue;
display: flex;
flex-flow: row;
justify-content: space-between;
padding: 10px;
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBox />
    </StyledHeader>
  )
}
