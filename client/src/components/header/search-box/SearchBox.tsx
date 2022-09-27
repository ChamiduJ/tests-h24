import React from 'react'
import Styled from 'styled-components'
import SearchButton from '../search-button/SearchButton'

const Wrapper = Styled.div`
position: relative;
`

const Input = Styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search'
}))`
border: solid 1px #aaa;
border-radius: 5px;
box-sizing: border-box;
height: 32px;
padding: 0 10px;
`

export default function SearchBox() {
  return (
    <Wrapper>
      <Input />
      <SearchButton />
    </Wrapper>
  )
}
