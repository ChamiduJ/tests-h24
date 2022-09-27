import React from 'react'
import Styled from 'styled-components'

const Button = Styled.button.attrs(() => ({
  type: 'button'
}))`
background: transparent;
border: none;
color: #aaa;
height: 24px;
right: 4px;
padding: 0;
position: absolute;
top: 4px;
width: 24px;
z-index: 1;
`

const SearchIcon = Styled.img.attrs(() => ({
  src: `${process.env.PUBLIC_URL}/icons/magnifier.svg`,
  alt: 'search icon'
}))`
  max-height: 100%;
  max-width: 100%;
`

export default function SearchButton() {
  return (
    <Button>
      <SearchIcon />
    </Button>
  )
}
