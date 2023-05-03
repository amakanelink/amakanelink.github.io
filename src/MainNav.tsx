import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const navCss = css`
  background-color: var(--secondary-color);
  color: var(--primary-color);
`

const divCss = css`
  padding-left: 1rem;
`

const listCss = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const listItemCss = css`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--primary-color);
  color: var(--tertiary-color);
  & a {
    color: var(--tertiary-color);
    text-decoration: none;
  }
`

const menuList = [
  'Who is Amakane Hakari?',
  <Link to="/links">Links</Link>,
].map((link, index) => (
  <li css={listItemCss} key={index}>{link}</li>
))

const MainNav = () => {
  const [ visible, setVisible ] = useState(false)

  return (
    <>
      <nav css={navCss}>
        <div css={divCss}>
          {
            visible ?
              <span className="material-symbols-outlined" onClick={() => setVisible(false)}>close</span> :
              <span className="material-symbols-outlined" onClick={() => setVisible(true)}>menu</span>
          }
        </div>
        {
          visible && <ul css={listCss}>
            {menuList}
          </ul>
        }
      </nav>
    </>
  )
}

export default MainNav