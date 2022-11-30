import React from "react";
import Masonry from "react-masonry-css";
import Img from "./Img";

const breakpointColumnsObj = {
  default: 9,
  1100: 6,
  700: 3,
  500: 2,
};

function Thumbs(props) {
  function toggleImage(index) {
    props.toggleThumbs(false);
    props.dispatch({ type: "set", position: index });
  }

  const items = props.slides.map(function (slide, index) {
    return (
      <div
        className="grid-item"
        key={slide.id}
        onClick={() => toggleImage(index)}
      >
        {slide.attributes.video.data ? (
          <Img
            src={slide.attributes.video.data.attributes.previewUrl}
            alt={slide.attributes.label}
          />
        ) : slide.attributes.photo.data ? (
          <Img
            src={slide.attributes.photo.data.attributes.formats.small.url}
            alt={slide.attributes.label}
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
        <div className="row">
          <div className="column column-small">
            <h2>
              Lives in London and Switzerland
              <br />
              <a href="mailto:contact@philippefragniere.ch">Contact</a>
              <br />
              <a
                href="https://www.instagram.com/philippefragniere/"
                target="blank"
              >
                Instagram
              </a>
            </h2>
          </div>
          <div className="column column-large">
            <h2>
              Representation in Paris and New-York
              <br />
              <a href="https://www.quadriga.fr/" target="blank">
                Quadriga Management
              </a>
            </h2>
          </div>
        </div>
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
