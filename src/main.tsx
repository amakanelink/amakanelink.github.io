import { Global, css } from '@emotion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'ress'

import App from './App'
import { store } from './app/store'

const globalCss = css`
  :root {
    --primary-color: #fffee1;
    --secondary-color: #717171;
    --tertiary-color: #83c5d9;
  }

  body {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Global styles={globalCss} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
