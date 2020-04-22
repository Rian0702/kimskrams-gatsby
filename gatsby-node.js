const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const resultRecipes = await graphql(`
    query AllRecipes {
      allContentfulRezept(
        filter: { node_locale: { eq: "de" } }
        sort: { fields: createdAt, order: DESC }
      ) {
        nodes {
          slug
          category {
            name
            slug
          }
        }
      }
    }
  `)
  const resultCategories = await graphql(`
    query AllCategories {
      allContentfulKategorie {
        nodes {
          name
          slug
        }
      }
    }
  `)
  resultRecipes.data.allContentfulRezept.nodes.forEach(({ slug, category }) => {
    createPage({
      path: category ? category.slug + "/" + slug : slug,
      component: path.resolve(`./src/templates/recipe.js`),
      context: {
        slug: slug,
      },
    })
  })

  resultCategories.data.allContentfulKategorie.nodes.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        slug: slug,
      },
    })
  })
}
