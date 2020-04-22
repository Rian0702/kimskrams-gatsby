import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./about-widget.scss"

function aboutWidget(props) {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          contentfulAbout(contentful_id: { eq: "6pFxEgWQo9jb3LUf2GtGyA" }) {
            image {
              fluid(maxHeight: 200) {
                ...GatsbyContentfulFluid
              }
            }
            name
            introduction
          }
        }
      `}
      render={(data) => (
        <div>
          <h3 className="about-headline">
            <span>Über mich</span>
          </h3>
          <div className="about-image">
            <Img
              fluid={data.contentfulAbout.image.fluid}
              alt="about-image"
            ></Img>
          </div>
          <div className="about-introduction">
            {data.contentfulAbout.introduction}
          </div>
        </div>
      )}
    />
  )
}

aboutWidget.propTypes = {}

export default aboutWidget
