import { styles } from '../../../styles'

const Greetings = () => {
    return <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#e8853f]' />
            <div className='w-1 sm:h-80 h-40 orange-gradient' />
        </div>
        <div><h1 className={`${styles.heroHeadText}`}>Hi 👋, I'm <span className='text-[#e8853f]'>Stas</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am an Software Engineer focusing on <span className='text-[#e8853f]'>Frontend</span> who develop user interfaces and Interactivity things
            </p>
        </div>
    </div>
}
export default Greetings