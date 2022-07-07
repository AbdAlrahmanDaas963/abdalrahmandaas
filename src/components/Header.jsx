import React from 'react'
import {motion} from 'framer-motion/dist/es/index'


function Header({img, name, skilles}) {
    
    return (
        <motion.div 
            initial={{y: '30vh', transform:" translate(-50%)", scale: 1.5 }} 
            animate={{y: 0 ,
                scale: 1,
                transition:{
                delay: 2
            }}} 
            className="header"
            id="Header"
        >
            <img className="me" src={img} alt="" />
            <div className="name">{name}</div>
            <div className="skilles">{skilles}</div>
        </motion.div>
    )
}

export default Header
