import React, {Suspense, useState} from "react";
import {Img as Simg} from "react-suspense-img";
import Spinner from "./Spinner";

export default function Img({src, alt}) {
  const [loaded, setLoaded] = useState(false);

  let onLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 50);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <Simg
        src={src}
        alt={alt}
        onLoad={onLoad}
        className={"slide-visual" + (loaded ? " loaded" : "")}
      />
    </Suspense>
  );
}
