import React from "react";
import "./App.scss";

import Slide from "./components/Slide";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {sizing} from "@material-ui/system";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Router, Route, Link, withRouter} from "react-router-dom";
import history from "./history";
import {convertToSlug, makeTitle} from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    //history.push("/test");

    fetch(
      "https://api.airtable.com/v0/appqVNF1da0YQC1Tq/Photos?api_key=keyujqQNYZtE5jjIi"
    )
      .then(res => res.json())
      .then(res => {
        //console.log(res.records);
        this.setState({slides: res.records});
      })
      .catch(error => console.log(error));
  }

  render() {
    const {slides} = this.state;

    if (this.slider) {
      // Find slug position from path
      let pos = 0;
      let location = history.location.pathname.replace(/\//g, "");
      for (var slide of slides) {
        if (makeTitle(location) == slide.fields.label.toLowerCase()) {
          pos = slides.indexOf(slide);
          this.slider.slickGoTo(pos, true);
          break;
        }
      }
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      arrows: false,
      draggable: false,
      afterChange: function(event) {
        var path = event.toString();
        history.push("/" + convertToSlug(slides[parseInt(event)].fields.label));
      }
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {slides.map(slide => (
            <Slide {...slide.fields} key={slide.id} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
