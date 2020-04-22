import React from "react"
import PropTypes from "prop-types"

import "./typo-box.scss"

function typoBox({ headline, bodyText, imageUrl }) {
  return (
    <div className="typo-box-wrapper">
      <div className="typo-box-image">
        <img src={imageUrl} style={{ maxWidth: "250px" }} alt="kimmi" />
      </div>
      <div
        className="typo-box-text"
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "15px",
          left: "15%",
          padding: "1rem",
          boxShadow:
            "  0 0px 10.8px rgba(0, 0, 0, 0.038),  0 0px 17.7px rgba(0, 0, 0, 0.071),  0 0px 22.4px rgba(0, 0, 0, 0.107),  0 0px 28px rgba(0, 0, 0, 0.152),  0 0px 49px rgba(0, 0, 0, 0.24)",
        }}
      >
        <h3
          className="typo-box-text-headline"
          style={{
            color: "#9acdce",
          }}
        >
          {headline}
        </h3>
        <div
          className="typo-box-text-body"
          dangerouslySetInnerHTML={{
            __html: bodyText,
          }}
        ></div>
      </div>
    </div>
  )
}

typoBox.propTypes = {
  headline: PropTypes.string,
  bodyText: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default typoBox
