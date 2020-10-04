import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {slugify} from "../utils";
import Img from "./Img";
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player";

function Slide({
  id,
  fields,
  slides,
  isAnimated,
  setDirection,
  setSlideDisplayed,
  muted
}) {
  let history = useHistory();
  let location = useLocation();
  let current, prev, next;

  slides.map((obj, index) => {
    if ("/" + slugify(obj.fields.label) === location.pathname) {
      current = slides[index];
      prev = slides[index - 1] ? slides[index - 1] : slides[slides.length - 1];
      next = slides[index + 1] ? slides[index + 1] : slides[0];
    }
    return null;
  });

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

  function changeSlide(event) {
    if (event.clientX < event.view.innerWidth / 2) {
      setDirection("left");
      history.push({
        pathname: "/" + slugify(prev.fields.label),
        state: {}
      });
    } else {
      setDirection("right");
      history.push({
        pathname: "/" + slugify(next.fields.label),
        state: {}
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Philippe Fragniere — {fields.label}</title>
      </Helmet>
      <div className="slide">
        <div
          className="slide-item"
          key={fields.id}
          onClick={isAnimated ? undefined : e => changeSlide(e)}
          //  onMouseMove={e => mouseMove(e)}
        >
          {fields.video ? (
            <ReactPlayer
              url={fields.video[0].url}
              playing={!isAnimated}
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
                    muted: muted
                  }
                }
              }}
              // onReady={e => handleOnReady())}
              // onStart={e => console.log("start")}
            />
          ) : null}
          {fields.photo && !fields.video ? (
            <Img
              src={fields.photo[0].thumbnails.large.url}
              alt={fields.label}
            />
          ) : null}
          {!fields.video && !fields.photo ? "No visuals" : null}
        </div>
      </div>
    </>
  );
}

export default Slide;
