import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query MyFirstQuery {
    site {
      siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title : {title}</h1>
      <h1>name : {name}</h1>
    </div>
  )
}
// This data is taken from the gatsby-config.js file

// siteMetadata: {
//   title: "Gatsby Tutorial",
//   description: "Some random description",
//   author: "Mark Young",
//   data: ["item 1", "item 2"],
//   person: { name: "peter", age: 32 },
// },

export default Header
