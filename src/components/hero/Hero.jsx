import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
import css from './Hero.module.scss'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}
        className={`innerWidth ${css.container}`}>
            {/* Upper Elements */}
            <div className={css.upperElements}>
               <motion.span className='primaryText'
               variants={fadeIn("right","tween",0.2,1)}> Hey There,<br /> I am Jalaj .
               </motion.span>

               <motion.span className='secondaryText' variants={fadeIn("left","tween",0.4,1)}> I design beautiful simple things<br /> And I love What I do .
               </motion.span>
            </div>
            {/* person */}
            <motion.div className={css.person}
            variants={fadeIn("up","tween",0.4,1)}>
                <motion.img src='./person.png' variants={slideIn("up","tween",0.5,1.3)}/>
            </motion.div>

            {/* email */}
            <a href="mailto:jalajbhandula.2k@gmail.com" className={css.email}>jalajbhandula.2k@gmail.com</a>

            {/* Lower Elements */}
            <div className={css.lowerElements}>
            <motion.div className={css.experience} variants={fadeIn("right","tween",0.2,1)}>
                <div className="primaryText">1</div>
                <div className="secondaryText">
                    <div>
                        Year
                    </div>
                    <div>
                        Experience
                    </div>
                </div>
            </motion.div>
            <motion.div className={css.certificate} variants={fadeIn("left","tween",0.4,1)}>
            <img src='./certificate.png' alt='certificateLogo'/>
            <span>CERTIFIED PROFESSIONAL</span>
            <span><b>FULL STACK WEB DEVELOPER</b></span>
            </motion.div>
            </div>
        </motion.div>
        
    </section>
  )
}

export default Hero