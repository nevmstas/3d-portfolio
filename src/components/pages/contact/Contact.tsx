import { motion } from "framer-motion"
import { Default } from "../../templates"
import { slideIn } from "../../../utils/motion"
import { styles } from "../../../styles"

const Contact = () => {
    return <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn({ direction: 'left', type: 'tween', delay: 0.1, duration: 1 })}
            className="flex-[0.75] bg-black-100 p-8 rounded-xl h-72"
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
            <button className="bg-tertiary py-3 px-8 text-white rounded-xl outlined-none w-fit shadow-md shadow-primary font-bold">
                <a href="mailto:nevmyvakastas@gmail.com">Send me email</a>
            </button>
        </motion.div>
    </div>
}

export default Default({ Page: Contact, idName: 'contact' })