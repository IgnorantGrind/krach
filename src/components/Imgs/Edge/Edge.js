import React, { useState, createRef } from "react";
import classNames from "classnames";
import edgeLeft from "./SozialAlkM.jpg";
import edgeRight from "./SozialAlkR.jpg";
import "./Edge.css";

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref]);

  return dimensions;
};

function LeftEdge() {
  const divRef = createRef();
  const dimensions = useRefDimensions(divRef);
  const maxHeight =
    ((dimensions.width / dimensions.height) < (7 / 37)) ?
      true : false;

  return (
    <div
      className="edge-left-container"
      ref={divRef}
    >
      <img
        src={edgeLeft}
        alt=""
        className={classNames({
          'edge-img-long': maxHeight,
          'edge-img-wide': !maxHeight
        })}
      />
    </div>
  );
};

function RightEdge() {
  const divRef = createRef();
  const dimensions = useRefDimensions(divRef);
  const maxHeight =
    ((dimensions.width / dimensions.height) <= (7 / 37)) ?
      true : false;

  return (
    <div
      className="edge-right-container"
      ref={divRef}
    >
      <img
        src={edgeRight}
        alt=""
        className={classNames({
          'edge-img-long': maxHeight,
          'edge-img-wide': !maxHeight
        })}
      />
    </div>
  );
};

export { LeftEdge, RightEdge };
