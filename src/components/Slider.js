import React, { useState, useEffect, useReducer } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Slide from "./Slide";
import Titles from "./Titles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSwipeable } from "react-swipeable";

const init = (initialValue) => {
  return { position: initialValue, anim: "fade" };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return {
        ...state,
        position: (state.position + 1) % action.numItems,
        anim: "right",
      };
    case "prev":
      return {
        ...state,
        position: (state.position - 1 + action.numItems) % action.numItems,
        anim: "left",
      };
    case "set":
      return { ...state, position: action.position, anim: "fade" };
    case "reset":
      return init(0);
    default:
      throw new Error("Unexpected action");
  }
};

const Slider = (props) => {
  const { res, initialPos } = props;

  const history = useHistory();
  const location = useLocation();

  const animated = useTransitionEvent(false);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => slide("next"),
    onSwipedRight: () => slide("prev"),
    onSwiping: () => setSwiping(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  const [swiping, setSwiping] = useState(0);
  const [muted, setMute] = useState(true);
  const [current, dispatch] = useReducer(reducer, initialPos, init);

  useEffect(() => {
    history.push({
      pathname: res[current.position].path,
    });
  }, [current.position, res, history]);

  useEffect(() => {
    const handleUserKeyPress = (event) => {
      const { keyCode } = event;
      if (keyCode === 37) slide("prev");
      if (keyCode === 39) slide("next");
    };
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  const slide = (dir) => {
    setSwiping(0);
    if (!muted) setMute(true);
    if (!animated.value) dispatch({ type: dir, numItems: res.length });
  };

  const routes = res.map((slide, index) => {
    return (
      <Route key={index} exact path={slide.path}>
        {<Slide {...slide} muted={muted} />}
      </Route>
    );
  });

  return (
    <>
      <Titles
        slides={res}
        currentSlide={res[current.position]}
        //  label={res.records[current.position].fields.label}
        dispatch={dispatch}
        muted={muted}
        setMute={setMute}
      />

      <div
        className={"slider " + current.anim + "-transition"}
        {...swipeHandlers}
        onClick={(e) =>
          !swiping
            ? e.clientX < e.view.innerWidth / 2
              ? slide("prev")
              : slide("next")
            : setSwiping(0)
        }
      >
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={600}
            classNames="slide"
            onEntering={animated.animStart}
            onExited={animated.animEnd}
            unmountOnExit
          >
            <Switch location={location} basename={process.env.PUBLIC_URL}>
              {routes}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};

function useTransitionEvent(initialValue) {
  const [value, setValue] = useState(initialValue);
  function animStart() {
    setValue(true);
  }
  function animEnd() {
    setValue(false);
  }
  return {
    value,
    animStart: animStart,
    animEnd: animEnd,
  };
}

export default Slider;
