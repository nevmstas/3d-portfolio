import { motion } from 'framer-motion'
import { styles } from '../../../styles'
import Computer from '../../atoms/computer/Computer'

const Hero = () => {
    return <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            <div><h1 className={`${styles.heroHeadText}`}>Hi 👋, I'm <span className='text-[#915eff]'>Stas</span></h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    As a <span className='text-[#915eff]'>Front End Engineer</span>, I'm passionate about bringing interactivity and innovative ideas to UI design. My drive for staying current in the industry allows me to implement the latest techniques, leading to exceptional user experiences
                </p>
            </div>
        </div>
        <Computer />
    </section>
}
export default Hero