import React from "react";
import { motion } from "framer-motion/dist/es/index";
import Link from "./common/Link";

import email from "./img/icons/gmail.png";
import face from "./img/icons/face.png";
import github from "./img/icons/github.png";
import insta from "./img/icons/instagram.png";
import tele from "./img/icons/telegram.png";
import linkedin from "./img/icons/linkedin.png";

function Footer() {
  const state = [
    { id: 1, img: email, href: "mailto:abdalrahmandaas963@gmail.com" },
    { id: 2, img: face, href: "https://www.facebook.com/abdalrahman.daas.16" },
    { id: 3, img: github, href: "https://github.com/AbdAlrahmanDaas963" },
    {
      id: 4,
      img: insta,
      href: "https://instagram.com/abdalrahmandaas?utm_medium=copy_link",
    },
    {
      id: 5,
      img: tele,
      href: "http://T.me/abdalrahman_daas",
    },
    {
      id: 6,
      img: linkedin,
      href: "https://www.linkedin.com/in/abdalrahman-daas-a04b69212",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="footer"
    >
      <div className="tit">Contact me :</div>
      <div className="links">
        {state.map((item) => (
          <Link key={item.id} img={item.img} href={item.href} />
        ))}
      </div>
    </motion.div>
  );
}

export default Footer;
