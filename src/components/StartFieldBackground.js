import React, { useEffect, useState } from "react";
import { StarField } from "starfield-react";

export default function StartFieldBackground() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  if (!width && !height) {
    return null;
  }
  return <StarField width={width} height={height} fps={10} />;
}
