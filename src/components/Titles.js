import React, {useState} from "react";
import Thumbs from "./Thumbs";

function Titles({slides, currentSlide, dispatch, muted, setMute}) {
  const [showThumbs, toggleThumbs] = useState(false);

  return (
    <>
      <div className={showThumbs ? "white" : ""}>
        {showThumbs && (
          <Thumbs
            slides={slides}
            toggleThumbs={toggleThumbs}
            dispatch={dispatch}
          />
        )}
        <div className="fixed top-left">
          <h1>{showThumbs ? null : "Philippe Fragnière"}</h1>
        </div>
        <div className="fixed top-right">
          <h2 onClick={() => toggleThumbs(!showThumbs)} className="link">
            {showThumbs ? "Close" : "Index"}
          </h2>
        </div>
        <div
          className="fixed bottom-left label"
          dangerouslySetInnerHTML={{
            __html:
              !showThumbs && currentSlide.fields.label
                ? "<h2>" + currentSlide.fields.label + "</h2>"
                : null
          }}
        />
      </div>
      {muted && currentSlide.fields.video && currentSlide.fields.video_sound && (
        <div className="fixed bottom-right">
          <h2 onClick={() => setMute(!muted)} className="link">
            {muted && "Sound On"}
          </h2>
        </div>
      )}
    </>
  );
}
export default Titles;
