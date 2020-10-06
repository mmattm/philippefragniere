import React from "react";
import Img from "./Img";
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player";

function Slide({id, fields}) {
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

  return (
    <>
      <Helmet>
        <title>
          Philippe Fragniere {fields.label ? " — " + fields.label : ""}
        </title>
      </Helmet>
      <div className="slide">
        <div
          className="slide-item"
          key={id}
          //  onMouseMove={e => mouseMove(e)}
        >
          {fields.video && (
            <ReactPlayer
              url={fields.video[0].url}
              playing={true}
              loop={true}
              playsinline={true}
              width="100%"
              height="100%"
              //onClick={unmute}
              className="slide-visual loaded video"
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    muted: true
                  }
                }
              }}
            />
          )}
          {fields.photo && !fields.video && (
            <Img
              src={fields.photo[0].thumbnails.large.url}
              alt={fields.label}
            />
          )}
          {!fields.video && !fields.photo && "No visuals"}
        </div>
      </div>
    </>
  );
}

export default Slide;
