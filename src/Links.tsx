import { css } from '@emotion/react'

const listCss = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  & > li > a {
    color: var(--tertiary-color);
  }
`

function Links() {
  return (
    <>
      <ul css={listCss}>
        <li><a href="https://github.com/amakane_hakari">GitHub</a></li>
        <li><a href="https://misskey.io/@amakane_hakari">Misskey.io</a></li>
      </ul>
    </>
  )
}

export default Links
