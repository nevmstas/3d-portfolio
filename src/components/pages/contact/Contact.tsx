import { motion } from "framer-motion"
import { Default } from "../../templates"
import { slideIn } from "../../../utils/motion"
import { styles } from "../../../styles"
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

import ContactButton from "../../atoms/contact-button/ContactButton"

const contacts = [
    { Icon: AiFillGithub, name: 'Github', link: 'https://github.com/nevmstas' },
    { Icon: AiFillLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/stas-nevmyvaka-3770b81a2/' },
    { Icon: AiFillMail, name: 'Send me an email', link: 'mailto:nevmyvakastas@gmail.com' }
]

const Contact = () => {
    return <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 justify-center overflow-hidden">
        <motion.div
            variants={slideIn({ direction: 'left', type: 'tween', delay: 0.1, duration: 1 })}
            className="flex-[0.75] bg-black-100 p-8 rounded-xl"
        >
            <div className="flex justify-between"><p className={styles.sectionSubText}>Get in touch</p><p className={styles.sectionSubText}>{new Date().getFullYear()} Stanislav Nevmyvaka</p></div>
            <h3 className={styles.sectionHeadText}>Do you want to connect?</h3>
            <div className="flex justify-around mt-5">
                {contacts.map(contact => <ContactButton {...contact} />)}
            </div>
        </motion.div>
    </div>
}

export default Default({ Page: Contact, idName: 'contact' })