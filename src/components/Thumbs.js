import React from "react";
import Masonry from "react-masonry-css";
import Img from "./Img";
import {slugify} from "../utils";

import {useHistory} from "react-router-dom";

const breakpointColumnsObj = {
  default: 9,
  1100: 6,
  700: 3,
  500: 2
};

function Thumbs({slides, setDirection, toggleThumbs}) {
  let history = useHistory();

  function toggleImage(path) {
    setDirection("fade");
    history.push({
      pathname: path,
      state: {}
    });
    toggleThumbs();
  }

  const items = slides.map(function(slide) {
    return (
      <div
        className="grid-item"
        key={slide.id}
        onClick={() => toggleImage("/" + slugify(slide.fields.label))}
      >
        {slide.fields.photo ? (
          <Img
            src={slide.fields.photo[0].thumbnails.large.url}
            alt={slide.fields.label}
          />
        ) : (
          "No visuals"
        )}
      </div>
    );
  });

  return (
    <>
      <div className="gallery">
        <div className="gallery-content">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="grid"
            columnClassName="grid_column"
          >
            {items}
          </Masonry>
        </div>
      </div>
    </>
  );
}
export default Thumbs;
