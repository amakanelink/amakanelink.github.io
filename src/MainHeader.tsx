import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav'

const headerCss = css`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding-top: 2rem;
  position: relative;
  width: 100%;
`

const h1Css = css`
  padding-left: 1rem;
`

const headerLinkCss = css`
  color: var(--primary-color);
  text-decoration: none;
`

function MainHeader() {
  return (
    <>
      <header css={headerCss}>
        <h1 css={h1Css}><Link to="/" css={headerLinkCss}>Amakane Links</Link></h1>
        <MainNav />
      </header>
    </>
  )
}

export default MainHeader
