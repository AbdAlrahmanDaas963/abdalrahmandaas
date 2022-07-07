import React from 'react'
import {motion} from 'framer-motion/dist/es/index'

function WorkItem({img, title, tool, id, href}) {
    const clone = id / 3 + 2;
    const delay = id > 9 ? `1.${clone-9}` : `.${clone}`;
    
    return (
        <motion.a
            href={href}
            target="_blank"
                whileHover={{
                    scale: 1.2,
                    cursor: 'pointer',
                    transition: { duration: .2}
                }}
                whileTap={{ scale: 0.9 }}
                initial={{scale: 0, transition:{delay: clone}}} animate={{scale: 1}} className="item"
            >
            <motion.img initial={{boxShadow: "0 0 8px #0a5aa5"}} whileHover={{
                    boxShadow: "0 0 40px #000000",
                    transition: { duration: .2}
                }} className="work-img" src={img} alt="" />
            <div className="title">{title}</div>
            <div className="tool">{tool}</div>
        </motion.a>
    )
}

export default WorkItem
