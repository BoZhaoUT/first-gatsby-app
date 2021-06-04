import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Heading = styled.div`
  margin-top: 0;
  margin-bottom: 64;
  max-width: 320;
  outline: 1px solid red;
`

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <Heading>Page not found</Heading>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
