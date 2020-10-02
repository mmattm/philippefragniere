import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import {CSSTransition} from "react-transition-group";
import "../App.scss";
import Slide from "./Slide";
import Main from "./Main";

import {slugify} from "../utils";

export default class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      slides: [],
      isAnimated: false,
      slideDirection: "fade",
      showThumbs: false,
      fetched: false,
      muted: true
    };
    this.onEnter = this.onEnter.bind(this);
    this.onExited = this.onExited.bind(this);
    this.setDirection = this.setDirection.bind(this);
    this.toggleThumbs = this.toggleThumbs.bind(this);
    this.setSlideDisplayed = this.setSlideDisplayed.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appqVNF1da0YQC1Tq/Photos?api_key=keyujqQNYZtE5jjIi&filterByFormula=NOT%28%7Bdraft%7D%29&sort%5B0%5D%5Bfield%5D=position&sort%5B0%5D%5Bdirection%5D=asc"
    )
      .then(res => res.json())
      .then(res => {
        // ID slug instead of empty label
        res.records.forEach((element, index) => {
          element.fields.withLabel = true;
          if (element.fields.label === undefined) {
            element.fields.label = "v-" + element.id;
            element.fields.withLabel = false;
          }
        });
        this.setState({slides: res.records});

        for (var slide of res.records) {
          this.setState({
            routes: this.state.routes.concat({
              path: "/" + slugify(slide.fields.label),
              slide: slide,
              displayed: false
            }),
            slides: res.records,
            isAnimated: false,
            fetched: true
          });
        }
      })
      .catch(error => console.log(error));
  }

  onEnter = () => {
    this.setState({
      isAnimated: true,
      muted: false
    });
  };
  onExited = () => {
    this.setState({
      isAnimated: false,
      muted: false
    });
  };
  setDirection = direction => {
    this.setState({
      slideDirection: direction
    });
  };
  toggleThumbs = () => {
    this.setState({
      showThumbs: !this.state.showThumbs
    });
  };
  setSlideDisplayed = slide => {
    this.setState(state => {
      const list = state.slides.map(s =>
        s === slide ? (slide.displayed = true) : null
      );
      return {
        list
      };
    });
  };

  render() {
    const {routes, slideDirection} = this.state;

    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path="/">
            {routes[0] ? (
              <Redirect
                push={true}
                to={{pathname: routes[0].path, state: {}}}
              />
            ) : null}
          </Route>

          <Main
            state={this.state}
            showThumbs={this.state.showThumbs}
            toggleThumbs={this.toggleThumbs}
            setDirection={this.setDirection}
          />
          <div className={"slider " + slideDirection + "-transition"}>
            {routes.map(({path, slide}) => (
              <Route key={path} exact path={path}>
                {({match}) => (
                  <CSSTransition
                    in={match != null}
                    timeout={{enter: 800, exit: 800}}
                    classNames="slide"
                    onEnter={this.onEnter}
                    onExited={this.onExited}
                    unmountOnExit
                  >
                    <div className="slide">
                      {
                        <Slide
                          {...slide}
                          slides={this.state.slides}
                          isAnimated={this.state.isAnimated}
                          setDirection={this.setDirection}
                          setSlideDisplayed={this.setSlideDisplayed}
                          muted={this.state.muted}
                        />
                      }
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </Router>
      </>
    );
  }
}
