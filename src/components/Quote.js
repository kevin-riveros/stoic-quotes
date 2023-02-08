import React, { useState, useEffect } from "react";
import { Montserrat } from "@next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export default function Quote() {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
  }, []);

  if (!height) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${height}px`,
      }}
    >
      <p
        className={inter.className}
        style={{
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        “Te conviertes en lo que le das tu atención” Epicteto.
      </p>
    </div>
  );
}
