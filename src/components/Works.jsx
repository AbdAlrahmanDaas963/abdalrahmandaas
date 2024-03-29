import React from "react";
import { data } from "../data/index";
import Card from "./common/Card";

function Works() {
  return (
    <div className="works">
      <div className="works-title">My Work</div>
      <div className="cards">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            tool={item.tool}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
