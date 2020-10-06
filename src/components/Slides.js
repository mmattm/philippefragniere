import React, {Suspense, useState, useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";

import {BrowserRouter as Router, Route} from "react-router-dom";
import useFetch from "fetch-suspense";
import {CSSTransition} from "react-transition-group";
import "../App.scss";
import Slide from "./Slide";
import Main from "./Main";
import {slugify} from "../utils";
import Spinner from "./Spinner";

const Fetch = () => {
  let res = useFetch("https://boiling-bastion-11005.herokuapp.com/", {
    method: "GET"
  });
  if (!res.fetched) {
    res.records.forEach((element, index) => {
      if (element.fields.title === undefined)
        element.fields.title = "v-" + element.id;
      element.path = "/" + slugify(element.fields.title);
    });
  }
  let history = useHistory();
  let location = useLocation();

  const transitionDuration = 800;
  const [slideDirection, setDirection] = useState("fade");
  const [currentSlide, setSlide] = useState(getPos());
  const [animated, setAnimated] = useState(false);

  function getPos() {
    if (location.pathname !== "/") {
      let pos = res.records.findIndex(k => k.path === location.pathname);
      return pos >= 0 ? pos : 0;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    res.fetched = true;

    history.push({
      pathname: res.records[currentSlide].path
    });
  }, [currentSlide, history, res]);

  const handleClick = direction => {
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, transitionDuration);

    if (direction === "left") {
      setSlide(
        currentSlide - 1 > 0 ? currentSlide - 1 : res.records.length - 1
      );
    } else {
      setSlide(currentSlide + 1 < res.records.length ? currentSlide + 1 : 0);
    }
    setDirection(direction);
  };

  const routes = res.records.map((slide, index) => {
    return (
      <Route key={index} exact path={slide.path}>
        {({match}) => (
          <CSSTransition
            in={match != null}
            timeout={transitionDuration}
            classNames="slide"
            unmountOnExit
          >
            {<Slide {...slide} />}
          </CSSTransition>
        )}
      </Route>
    );
  });

  return (
    <>
      <Main
        slides={res.records}
        current={res.records[currentSlide]}
        setDirection={setDirection}
        setSlide={setSlide}
      />
      <div
        className={"slider " + slideDirection + "-transition"}
        onClick={e =>
          !animated &&
          handleClick(e.clientX < e.view.innerWidth / 2 ? "left" : "right")
        }
      >
        {routes}
      </div>
    </>
  );
};

const Slides = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense
          fallback={
            <>
              <div className="fixed top-left">
                <h1>Philippe Fragnière</h1>
              </div>
              <Spinner />
            </>
          }
        >
          <Fetch />
        </Suspense>
      </Router>
    </>
  );
};

export default Slides;
