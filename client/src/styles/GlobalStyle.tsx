import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../types/app.types'

const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
body {
  background: ${({ theme }) => theme.primaryBackground};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export default GlobalStyle
