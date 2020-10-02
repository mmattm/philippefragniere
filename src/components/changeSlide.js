import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {slugify} from "../utils";
import Img from "./Img";

function ChangeSlide({event, slides}) {
  let history = useHistory();
  let location = useLocation();
  let prev, next;
  console.log("test");

  slides.map((obj, index) => {
    if ("/" + slugify(obj.fields.label) === location.pathname) {
      prev = slides[index - 1] ? slides[index - 1] : slides[slides.length - 1];
      next = slides[index + 1] ? slides[index + 1] : slides[0];
    }
    return null;
  });

  return (
    <div className="slide-item" key={this.props.id}>
      <Img
        src={this.props.fields.photo[0].thumbnails.large.url}
        alt={this.props.fields.label}
      />
    </div>
  );
}

export default ChangeSlide;
