import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import "./burger-menu.scss"

function BurgerMenu() {
  return (
    <div className="burger-menu">
      <input id="burger" type="checkbox" />

      <label htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <ul>
          <StaticQuery
            className="desktop-navigation"
            query={graphql`
              query AllCategoriesBurger {
                allContentfulKategorie {
                  nodes {
                    name
                    slug
                  }
                }
              }
            `}
            render={data => (
              <>
                {data.allContentfulKategorie.nodes.map((category, i) => {
                  return (
                    <li key={i}>
                      <Link to={"/" + category.slug} activeClassName="active">
                        {category.name}
                      </Link>
                    </li>
                  )
                })}
              </>
            )}
          />
        </ul>
      </nav>
    </div>
  )
}

export default BurgerMenu
