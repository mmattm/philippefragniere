import React from "react";
import Img from "./Img";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { stripHtml } from "../utils";

function Slide({ id, attributes, muted }) {
  /*
  React.useEffect(() => {
    //for (var slide of [current, prev, next]) setSlideDisplayed(slide);
    //preloadImg(prev, next);
  }, [location]);

  //preloadImg(prev, next);

  function preloadImg() {
    for (var img of arguments) {
      if (img.fields && !img.displayed) {
        console.log("preload");
        const temp_img = new Image();
        temp_img.src = img.fields.photo[0].thumbnails.large.url;
      }
    }
  }*/
  console.log(attributes);
  return (
    <>
      <Helmet>
        <title>
          Philippe Fragniere
          {attributes.label ? " — " + stripHtml(attributes.label) : ""}
        </title>
      </Helmet>
      <div className="slide">
        <div
          className="slide-item"
          key={id}
          //  onMouseMove={e => mouseMove(e)}
        >
          {attributes.video.data && (
            <ReactPlayer
              url={attributes.video.data.attributes.url}
              playing={true}
              loop={true}
              controls={false}
              playsinline={true}
              width="100%"
              height="100%"
              className="slide-visual loaded video"
              muted={muted}
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    playsInline: true,
                    poster:
                      attributes.photo.data &&
                      attributes.photo.data.attributes.formats.large.url,
                  },
                },
              }}
            />
          )}
          {attributes.photo.data && !attributes.video.data && (
            <Img
              src={
                attributes.photo.data.attributes.formats.large?.url ||
                attributes.photo.data.attributes.formats.medium.url
              }
              alt={attributes.alt}
            />
          )}
          {!attributes.video.data && !attributes.photo.data && "No visuals"}
        </div>
      </div>
    </>
  );
}

export default Slide;
