import React from "react";
import "./App.scss";

import Slideshow from "./components/Slideshow";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Router, Route, Link, withRouter} from "react-router-dom";
import history from "./history";
import {convertToSlug, makeTitle} from "./utils";

class App extends React.Component {
  state = {
    slidesData: []
  };

  componentDidMount() {
    //history.push("/test");

    fetch(
      "https://api.airtable.com/v0/appqVNF1da0YQC1Tq/Photos?api_key=keyujqQNYZtE5jjIi"
    )
      .then(res => res.json())
      .then(res => {
        //console.log(res.records);
        this.setState({slidesData: res.records});
      })
      .catch(error => console.log(error));
  }

  render() {
    const {slidesData} = this.state;

    if (this.slider) {
      // Find slug position
      let pos = 0;
      let location = history.location.pathname.replace(/\//g, "");
      for (var slide of slidesData) {
        if (makeTitle(location) == slide.fields.label.toLowerCase())
          pos = slidesData.indexOf(slide);
      }
      if (pos) this.slider.slickGoTo(pos, true);
    }

    // history.push(
    //   "/" + convertToSlug(slidesData[parseInt(event)].fields.label)
    // );

    var settings = {
      dots: true,
      infinite: true,
      fade: false,
      speed: 200,
      draggable: false,
      focusOnSelect: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: "slides-custom",
      afterChange: function(event) {
        var path = event.toString();
        history.push(
          "/" + convertToSlug(slidesData[parseInt(event)].fields.label)
        );
      }
    };

    console.log(slidesData);

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{minHeight: "100vh"}}
      >
        <Grid item xs={3}>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {slidesData.map(slide => (
              <Slideshow {...slide.fields} key={slide.id} />
            ))}
          </Slider>
        </Grid>
      </Grid>
    );
  }
}

export default App;
