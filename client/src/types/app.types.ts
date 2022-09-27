export interface IDarkModeContext {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export type ThemeType = {
  primaryBackground: string,
  headerBackground: string,
  buttonBackground: string,
  cardBackground: string,
  primaryBorder: string,
  primaryText: string,
  buttonText: string,
  linkText: string,
}
