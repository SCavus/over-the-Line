import React from "react";
import PropTypes from "prop-types";

export const ArtistPage = ({ categories, setCategory }) => {
  const classNamePicker = (object) => {
    if (Object.keys(object).toString() === "writing") {
      return "blue";
    } else if (Object.keys(object).toString() === "acting") {
      return "orange";
    } else {
      return "yellow";
    }
  };

  return (
    <div className="artist-page">
      <div className="section-line"></div>
      <div className="artists-main d-flex justify-content-center align-items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className={classNamePicker(category)}
            onClick={(e) => setCategory(category)}
          >
            {Object.keys(category)}
          </div>
        ))}
      </div>
    </div>
  );
};

ArtistPage.propTypes = {
  categories: PropTypes.array,
};
