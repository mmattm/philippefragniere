import React, { Suspense, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import useFetch from "fetch-suspense";
import "../App.scss";
import Slider from "./Slider";
import { slugify } from "../utils";
import Spinner from "./Spinner";

const Fetch = () => {
  let location = useLocation();
  const { REACT_APP_STRAPI_URL } = process.env;

  // OLD https://boiling-bastion-11005.herokuapp.com/
  const res = useFetch(
    "https://boiling-bastion-11005.herokuapp.com/api/" +
      "visuals?populate=%2A&sort[0]=position%3Aasc&pagination[pageSize]=1000",
    {
      method: "GET",
    }
  );

  //const mounted = useRef();
  const [mounted, setMounted] = useState(false);

  const [initialSlide, setInitialSlide] = useState(0); // null

  useEffect(() => {
    //componentDidMount

    if (!mounted) {
      res.data.forEach((element, index) => {
        if (element.attributes.title === undefined)
          element.attributes.title = "v-" + element.attributes.id;
        element.path = "/" + slugify(element.attributes.title);
      });

      const getPos = () => {
        if (location.pathname !== "/") {
          let pos = res.data.findIndex((k) => k.path === location.pathname);
          return pos >= 0 ? pos : 0;
        } else {
          return 0;
        }
      };
      setInitialSlide(getPos());

      //mounted.current = true;
      setMounted(true);
    }
  }, [location.pathname, res.data, mounted]);

  //console.log(res.data);

  return mounted ? <Slider res={res.data} initialPos={initialSlide} /> : null;
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
