import React, {useState} from "react";
import Thumbs from "./Thumbs";

function Titles({slides, label, dispatch}) {
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
          <h1>
            {showThumbs ? (
              <a href="mailto:contact@philippefragniere.ch">Bookings</a>
            ) : (
              "Philippe Fragnière"
            )}
          </h1>
        </div>
        <div className="fixed top-right">
          <h2 onClick={() => toggleThumbs(!showThumbs)} className="clickable">
            {showThumbs ? "Close" : "More"}
          </h2>
        </div>
        <div
          className="fixed bottom-left"
          dangerouslySetInnerHTML={{
            __html: !showThumbs && label ? "<h2>" + label + "</h2>" : null
          }}
        />
      </div>
    </>
  );
}
export default Titles;
