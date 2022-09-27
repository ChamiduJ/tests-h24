import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Products from './pages/Products'
import GlobalStyle from './styles/GlobalStyle'
import { darkTheme, lightTheme } from './styles/theme'
import { IDarkModeContext } from './types/app.types'
import { Category, IProductsContext } from './types/products.types'

export const DarkModeContext = React.createContext<IDarkModeContext>({
  darkMode: false,
  setDarkMode: () => {}
})
export const ProductsContext = React.createContext<IProductsContext>({
  categories: [],
  setCategories: () => {}
})

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
          <ProductsContext.Provider value={{categories, setCategories}}>
            <GlobalStyle />
            <Header />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/products/:category" element={<Products/>}/>
              </Routes>
            </BrowserRouter>

            <Footer />
          </ProductsContext.Provider>
        </DarkModeContext.Provider>
      </ThemeProvider>
    </>
  )
}
