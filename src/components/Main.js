import React from "react";
import {useLocation} from "react-router-dom";
import Thumbs from "./Thumbs";

function Main({state, showThumbs, toggleThumbs, setDirection}) {
  let location = useLocation();

  function currentRoute() {
    return state.routes.find(function(route) {
      return route.path === location.pathname;
    });
  }

  let label = "Loading";
  if (currentRoute()) {
    if (currentRoute().slide)
      label = currentRoute().slide.fields.withLabel
        ? currentRoute().slide.fields.label
        : "";
  }

  return (
    <>
      <div className={showThumbs ? "white" : ""}>
        {showThumbs ? (
          <Thumbs
            slides={state.slides}
            setDirection={setDirection}
            toggleThumbs={toggleThumbs}
          />
        ) : null}
        <div className="fixed top-left">
          <h1>
            {showThumbs ? <a href="#">Bookings</a> : "Philippe Fragnière"}
          </h1>
        </div>
        <div className="fixed top-right">
          <h2>
            <span onClick={toggleThumbs} className="clickable">
              {showThumbs ? "Close" : "More"}
            </span>
          </h2>
        </div>
        <div className="fixed bottom-left">
          {showThumbs ? null : <h2>{label}</h2>}
        </div>
      </div>
    </>
  );
}
export default Main;
