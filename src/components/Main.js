import React, {Suspense, useState, useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

import {BrowserRouter as Router} from "react-router-dom";
import useFetch from "fetch-suspense";
import "../App.scss";
import Slider from "./Slider";
import {slugify} from "../utils";
import Spinner from "./Spinner";

const Fetch = () => {
  let location = useLocation();

  const res = useFetch("https://boiling-bastion-11005.herokuapp.com/", {
    method: "GET"
  });

  const mounted = useRef();
  const [initialSlide, setInitialSlide] = useState(null);

  useEffect(() => {
    //componentDidMount
    if (!mounted.current) {
      res.records.forEach((element, index) => {
        if (element.fields.title === undefined)
          element.fields.title = "v-" + element.id;
        element.path = "/" + slugify(element.fields.title);
      });

      const getPos = () => {
        if (location.pathname !== "/") {
          let pos = res.records.findIndex(k => k.path === location.pathname);
          return pos >= 0 ? pos : 0;
        } else {
          return 0;
        }
      };
      setInitialSlide(getPos());

      mounted.current = true;
    }
  }, [location.pathname, res.records]);

  return mounted.current ? (
    <Slider res={res} initialPos={initialSlide} />
  ) : null;
};

const Main = () => {
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

export default Main;
