import React from "react";
import Nav from "../shared/nav";
import Foot from "../shared/foot";

export default function Overview() {
  return (
    <>
      <div className="container">
        <div>
          <Nav />
        </div>
        <div>
          <Foot />
        </div>
      </div>
    </>
  );
}
