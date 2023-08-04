import { motion } from "framer-motion"
import { styles } from "../../../styles"
import { textVariant } from "../../../utils/motion"
import { Default } from "../../templates"
import 'react-vertical-timeline-component/style.min.css';
import { Timeline } from "../../organisms";

const Experience = () => {
    return <>
        <motion.div variants={textVariant({ delay: 0 })}>
            <p className={styles.sectionSubText}>What I have done so far</p>
            <h2 className={styles.sectionHeadText}>Work experience.</h2>
        </motion.div>
        <motion.div variants={textVariant({ delay: 0.5 })}>
            <Timeline />
        </motion.div>
    </>
}

export default Default({ Page: Experience, idName: 'work' })