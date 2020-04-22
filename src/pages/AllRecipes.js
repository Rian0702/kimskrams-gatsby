import {} from "./../components/recipe/preview"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeOverview from "../components/recipe/recipe-overview"

const AllRecipes = () => (
  <Layout>
    <main className="main">
      <SEO title="Rezept Übersicht" />
      <h1>Rezept übersicht</h1>
      <RecipeOverview></RecipeOverview>
    </main>
  </Layout>
)

export default AllRecipes
