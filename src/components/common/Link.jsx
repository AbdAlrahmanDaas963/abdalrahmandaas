import React from 'react'
// import {motion} from 'framer-motion/dist/es/index'
import {motion} from 'framer-motion'


function Link({img, href}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            whileHover={{
                scale: 1.2,
                cursor: 'pointer',
                rotate: "360deg",
                transition: { duration: .2 }
            }}
            whileTap={{ scale: 0.9 }}
            className="link"
        >
            <motion.img src={img} alt="" />
            <div className="side"></div>
        </motion.a>
    )
}

export default Link
