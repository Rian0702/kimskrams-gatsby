import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RecipePreview from "../components/recipe/recipe-preview"

import "../components/category.scss"

export default function RecipePage({ data }) {
  return (
    <Layout>
      <span className="headline-intro">Schau mal</span>
      <h1 className="category-headline">{data.contentfulKategorie.name}</h1>
      <div className="recipe-overview">
        {data.allContentfulRezept.nodes.map((rezept, i) => {
          return <RecipePreview recipe={rezept} key={i}></RecipePreview>
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allContentfulRezept(filter: { category: { slug: { eq: $slug } } }) {
      nodes {
        node_locale
        title
        id
        slug
        createdAt(locale: "de-DE", formatString: "Do MMMM YYYY")
        introduction {
          json
        }
        image {
          fluid(maxHeight: 400, maxWidth: 400) {
            ...GatsbyContentfulFluid
          }
        }
        category {
          name
          slug
        }
      }
    }
    contentfulKategorie(slug: { eq: $slug }) {
      name
    }
  }
`
