import { ThemeType } from '../types/app.types'

export const lightTheme: ThemeType = {
  primaryBackground: 'white',
  headerBackground: '#ffc0b3 linear-gradient(130deg, #ededed, #ffc0b3)',
  footerBackground: '#ffc0b3',
  buttonBackground: '#ff876f',
  cardBackground: '#f45334',
  primaryBorder: 'solid 1px light-grey',
  primaryText: 'black',
  buttonText: 'white',
  linkText: '#f45334',
  articleShadow: '0 0 5px 0 #f8cfc6'
}

export const darkTheme: ThemeType = {
  primaryBackground: 'black',
  headerBackground: '#ffc0b3 linear-gradient(130deg, #737373, #500e00)',
  footerBackground: '#500e00',
  buttonBackground: '#f45334',
  cardBackground: '#f45334',
  primaryBorder: 'solid 1px light-grey',
  primaryText: 'white',
  buttonText: 'white',
  linkText: '#ffbbaf',
  articleShadow: '0 0 5px -1px white'
}
