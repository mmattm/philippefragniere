import React from "react";
import "./App.scss";

import Slideshow from "./components/Slideshow";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Router, Route, Link} from "react-router-dom";
import history from "./history";

class App extends React.Component {
  state = {
    slidesData: []
  };

  componentDidMount() {
    //  console.log(this.slider);
    this.slider.slickGoTo(1);
    // fetch(
    //   "https://api.airtable.com/v0/appqVNF1da0YQC1Tq/Photos?api_key=keyujqQNYZtE5jjIi"
    // )
    //   .then(res => res.json())
    //   .then(res => {
    //     //console.log(res.records);
    //     this.setState({slidesData: res.records});
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      fade: false,
      speed: 200,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: "slides-custom",
      afterChange: function(event) {
        var path = event.toString();
        console.log(path);
        //history.push("/home");
        history.push("/" + path);
      }
    };

    const {slidesData} = this.state;
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
            <div>
              <h3>hello</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </Grid>
      </Grid>
    );
  }
}

export default App;
