import React from "react";
import { Montserrat } from "@next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export default function Quote() {
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
        height: "100vh",
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
