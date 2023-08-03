import { motion } from "framer-motion"
import { styles } from "../../../styles"
import { textVariant } from "../../../utils/motion"
import { Default } from "../../templates"
import { experiences } from "../../../utils/constants"
import ExperienceCard from "../../atoms/experience-card/ExperienceCard"
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return <>
        <motion.div variants={textVariant({ delay: 0 })}>
            <p className={styles.sectionSubText}>What I have done so far</p>
            <h2 className={styles.sectionHeadText}>Work experience.</h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
            <VerticalTimeline lineColor="#fff">
                {experiences.map((experience, index) => <ExperienceCard key={index} {...experience} />)}
            </VerticalTimeline>
        </div>
    </>
}

export default Default({ Page: Experience, idName: 'work' })