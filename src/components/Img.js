import React, {Suspense} from "react";
import {Img as Simg, resource} from "react-suspense-img";
import Spinner from "./Spinner";

export default class Img extends React.Component {
  state = {loaded: false};

  onLoad = () => {
    setTimeout(() => {
      this.setState({loaded: true});
    }, 50);
  };

  render() {
    const {loaded} = this.state;

    return (
      <React.Suspense fallback=<Spinner />>
        <Simg
          src={this.props.src}
          alt={this.props.alt}
          onLoad={this.onLoad}
          className={"slide-visual" + (loaded ? " loaded" : "")}
        />
      </React.Suspense>
    );
  }
}
