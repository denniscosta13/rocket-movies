import React from 'react'
import ReactDOM from 'react-dom/client'

import { FiArrowLeft} from 'react-icons/fi'


import { Header } from './components/Header' 
import { StarRate } from './components/StarRate' 

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Header />
      <StarRate rating={3} />
    </ThemeProvider>
  </React.StrictMode>,
)
