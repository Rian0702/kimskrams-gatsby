import React from "react"
import PropTypes from "prop-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { Link } from "gatsby"

import "./recipePreview.scss"
import Img from "gatsby-image"

function recipePreview({ recipe }) {
  return (
    <div className="recipe-preview">
      <h2 className="recipe-preview-box-headline">
        <Link
          className="navigation-link"
          to={
            recipe.category
              ? "/" + recipe.category.slug + "/" + recipe.slug
              : recipe.slug
          }
        >
          {recipe.title}
        </Link>
      </h2>
      <span className="recipe-preview-box-date">{recipe.createdAt}</span>
      <div className="recipe-image">
        <Img
          fluid={recipe.image.fluid}
          alt="recipeImage"
          className="recipe-image"
        ></Img>
      </div>

      <div
        className="recipe-preview-box-introduction"
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(
            recipe.introduction ? recipe.introduction.json : ""
          ),
        }}
      ></div>
      <div className="read-more-link">
        <Link
          className="read-more"
          to={
            recipe.category
              ? "/" + recipe.category.slug + "/" + recipe.slug
              : recipe.slug
          }
        >
          ZUM REZEPT <i className="material-icons">forward</i>
        </Link>
      </div>
    </div>
  )
}

recipePreview.propTypes = {
  recipe: PropTypes.object,
}

export default recipePreview
