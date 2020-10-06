import React, {useState} from "react";
import Thumbs from "./Thumbs";

function Main({slides, current, setSlide, setDirection}) {
  //let location = useLocation();
  const [showThumbs, toggleThumbs] = useState(false);
  return (
    <>
      <div className={showThumbs ? "white" : ""}>
        {showThumbs && (
          <Thumbs
            slides={slides}
            toggleThumbs={toggleThumbs}
            setDirection={setDirection}
            setSlide={setSlide}
          />
        )}

        <div className="fixed top-left">
          <h1>
            {showThumbs ? <a href="#">Bookings</a> : "Philippe Fragnière"}
          </h1>
        </div>
        <div className="fixed top-right">
          <h2>
            <span
              onClick={() => toggleThumbs(!showThumbs)}
              className="clickable"
            >
              {showThumbs ? "Close" : "More"}
            </span>
          </h2>
        </div>
        <div
          className="fixed bottom-left"
          dangerouslySetInnerHTML={{
            __html:
              !showThumbs && current.fields.label ? current.fields.label : null
          }}
        />
      </div>
    </>
  );
}
export default Main;
