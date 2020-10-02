import React from "react";

export default class Img extends React.Component {
  state = {loaded: false};

  onLoad = () => {
    this.setState({loaded: true});
  };

  render() {
    const {loaded} = this.state;

    return (
      <img
        className={"slide-visual" + (loaded ? " loaded" : "")}
        src={this.props.src}
        alt={this.props.alt}
        onLoad={this.onLoad}
      />
    );
  }
}
