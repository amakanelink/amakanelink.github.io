import { css } from '@emotion/react'
import MainHeader from './MainHeader'
import Root from './Root'
import Links from './Links'
import {
  Routes,
  Route
} from "react-router-dom"

const contentCss = css`
  padding: 1rem;
  margin: 0 auto;
`

function App() {
  return (
    <>
      <MainHeader />

      <div css={contentCss}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="links" element={<Links />} />
        </Routes>
      </div>
    </>
  )
}

export default App
