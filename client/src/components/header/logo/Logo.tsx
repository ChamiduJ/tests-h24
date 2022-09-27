import Styled from 'styled-components'

const Logo = Styled.img.attrs(() => ({
  alt: 'Home24 logo',
  src: `${process.env.PUBLIC_URL}/home-24-logo.svg`
}))`
height: 32px;
`

export default Logo;
