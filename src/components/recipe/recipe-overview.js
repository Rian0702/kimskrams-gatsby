import React from "react"
import { StaticQuery } from "gatsby"
import RecipePreview from "./recipe-preview"

import "./recipeOverview.scss"

function recipeOverview(props) {
  return (
    <StaticQuery
      query={graphql`
        query AllRecipes {
          allContentfulRezept(
            filter: { node_locale: { eq: "de" } }
            sort: { fields: createdAt, order: DESC }
            limit: 10
          ) {
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
                fluid(maxHeight: 400) {
                  ...GatsbyContentfulFluid
                }
              }
              category {
                name
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <div className="recipe-overview">
          {data.allContentfulRezept.nodes.map((rezept, i) => {
            return <RecipePreview recipe={rezept} key={i}></RecipePreview>
          })}
        </div>
      )}
    />
  )
}

recipeOverview.propTypes = {}

export default recipeOverview
