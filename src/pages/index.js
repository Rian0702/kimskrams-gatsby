import React from "react"
import Layout from "../components/layout"
import TypoBox from "../components/typo-box"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import RecipeOverview from "../components/recipe/recipe-overview"
import AboutWidget from "../components/about-widget"

const IndexPage = () => {
  return (
    <Layout>
      <main className="grid-2">
        <RecipeOverview
          style={{
            backgroundColor: "#faf5ee",
            paddingTop: "55px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        ></RecipeOverview>
        <div className="sidebar">
          <AboutWidget></AboutWidget>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
