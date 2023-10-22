import { useEffect, useState } from 'react'
import { styles } from '../../../styles'

const NAMES = ['Stas', 'Software Engineer']
const PERIOD = 2000
const DEFAULT_DELTA = 300 - Math.random() * 100

const Greetings = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(DEFAULT_DELTA)

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % NAMES.length;
        let fullText = NAMES[i];

        const term = isDeleting ? - 1 : 1
        let updatedText = fullText.substring(0, text.length + term)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(PERIOD)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#e8853f]' />
            <div className='w-1 sm:h-80 h-40 orange-gradient' />
        </div>
        <div><h1 className={`${styles.heroHeadText}`}>Hi 👋, I'm <span className='text-[#e8853f]'>{text}<span className='animate-blink'>|</span></span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am a Software Engineer focusing on <span className='text-[#e8853f]'>Frontend</span> who develop user interfaces and Interactivity things
            </p>
        </div>
    </div>
}
export default Greetings