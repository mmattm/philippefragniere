import React from "react";
import Masonry from "react-masonry-css";
import Img from "./Img";

const breakpointColumnsObj = {
  default: 9,
  1100: 6,
  700: 3,
  500: 2
};

function Thumbs(props) {
  function toggleImage(path) {
    //setDirection("fade");
    props.toggleThumbs(false);
    props.setDirection("fade");
    props.setSlide(path);
  }

  const items = props.slides.map(function(slide, index) {
    return (
      <div
        className="grid-item"
        key={slide.id}
        onClick={() => toggleImage(index)}
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
