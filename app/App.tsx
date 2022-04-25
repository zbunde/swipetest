import * as React from "react";
import SimpleCarousel from "./SimpleCarousel";
import { Paper } from "./components";

export default function App() {
  return (
    <div className="row">
      <div className="medium-6 column" style={{ width: "95%" }}>
        <h1>TikTok Embed;</h1>
        <hr />
        <Paper id="SimpleCarousel">
          <SimpleCarousel />
        </Paper>
        <hr />
      </div>
    </div>
  );
}
