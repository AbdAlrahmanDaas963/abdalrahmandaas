import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Works from './Works'
import Water from './Water'

//  import {motion} from 'framer-motion/dist/es/index'

import me from './img/me.jpg'




function Full() {
    return (
        <div className="full">
            <Header img={me} name={"AbdAlrahman Daas"} skilles={"Junior Front-end developer"} />
            <Works />
            <Footer />
            <Water />
        </div>
    )
}

export default Full

// work with the animation