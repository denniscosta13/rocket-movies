import React from 'react'
import ReactDOM from 'react-dom/client'



import { Header } from './components/Header' 
import { Tag } from './components/Tag' 

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Header />
      <Tag onDetails title="react"/>
      <Tag  title="react"/>
    </ThemeProvider>
  </React.StrictMode>,
)
