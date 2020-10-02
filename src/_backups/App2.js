import React from "react";
import Slideshow from "./components/Slideshow";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers
} from "react-awesome-slider/dist/navigation";

const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: () => <p>Page One</p>
        },
        {
          slug: "page-two",
          className: "page-two",
          children: () => <p>Page Two</p>
        }
      ]}
    />
  );
};

class App extends React.Component {
  state = {
    slidesData: []
  };

  componentDidMount() {
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
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        {slidesData.map(slide => (
          <Slideshow {...slide.fields} key={slide.id} />
        ))}
      </Grid>
    );
  }
}

export default App;
