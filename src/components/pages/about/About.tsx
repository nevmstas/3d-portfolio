import { motion } from "framer-motion"
import { styles } from "../../../styles"
import { fadeIn, textVariant } from "../../../utils/motion"

const About = () => {


    return <>
        <motion.div variants={textVariant({ delay: 1 })}>
            <p className={styles.sectionSubText}>Introdation</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p variants={fadeIn({ direction: "up", type: "", delay: 0.1, duration: 1 })}>

        </motion.p>
    </>
}

export default About