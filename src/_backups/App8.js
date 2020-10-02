import React from "react";
import "./App.scss";

import Slide from "./components/Slide";

import Container from "@material-ui/core/Container";

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
        //console.log(this);
        this.setState({slides: res.records});
      })
      .catch(error => console.log(error));
  }

  render() {
    const {slides} = this.state;

    // Find slug position from path
    if (this.slider) {
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
    // if (this.slider) console.log(this.slider.innerSlider.state.currentSlide);
    var self = this;
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      focusOnSelect: true,
      arrows: false,
      draggable: false,
      afterChange: function(event) {
        var path = event.toString();
        //self.setCurrent();
        //console.log(slides[parseInt(event)].fields.label);
        // self.setState({
        //   slides: slides,
        //   current_slide: slides[parseInt(event)]
        // });

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
        <div className="label">
          {this.slider ? this.slider.innerSlider.state.currentSlide : null}
        </div>
      </div>
    );
  }
}

export default App;
