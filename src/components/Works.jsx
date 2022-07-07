import React from "react";
import { motion } from "framer-motion/dist/es/index";

import WorkItem from "./common/workItem";

import Co from "./img/Great.png";
import Tic from "./img/Tic.png";
import meca from "./img/mecaGame.png";
import sipua from "./img/sipua.png";
import roznama from "./img/roznama.png";
import chat from "./img/chat.png";
import posts from "./img/posts.png";

function Works() {
  const state = [
    {
      id: 1,
      img: Co,
      title: "GreatCo",
      tool: "{Vanilla}",
      href: "http://greatcogroup.com/",
    },
    {
      id: 2,
      img: Tic,
      title: "tic-tac-toe",
      tool: "{React-js}",
      href: "https://abdalrahmandaas963.github.io/tic-tac-toe/",
    },
    {
      id: 3,
      img: meca,
      title: "Memory Card",
      tool: "{React-js}",
      href: "https://abdalrahmandaas963.github.io/MemoryCardGame2/",
    },
    {
      id: 4,
      img: roznama,
      title: "Roznama",
      tool: "{React-js}",
      href: "https://abdalrahmandaas963.github.io/Roznama/",
    },
    {
      id: 5,
      img: sipua,
      title: "S I P U A",
      tool: "{React-js, firebase}",
      href: "https://www.sipuaa.com/",
    },
    {
      id: 6,
      img: chat,
      title: "Chat App",
      tool: "{React-js, firebase}",
      href: "https://abdalrahmandaas963.github.io/ChatApp/",
    },
    {
      id: 7,
      img: posts,
      title: "Posts",
      tool: "{React-js, Redux-Toolkit}",
      href: "https://abdalrahmandaas963.github.io/redux-1/",
    },
  ];
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { delay: 2 } }}
      className="works"
    >
      <div className="tit">My latest works :</div>
      <div className="list">
        {state.map((item) => (
          <WorkItem
            key={item.id}
            img={item.img}
            id={item.id}
            title={item.title}
            tool={item.tool}
            href={item.href}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Works;
