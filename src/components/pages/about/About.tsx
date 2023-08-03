import { motion } from "framer-motion"
import { styles } from "../../../styles"
import { fadeIn, textVariant } from "../../../utils/motion"
import { services } from "../../../utils/constants"
import { ServiceCard } from "../../atoms"
import { Default } from "../../templates"

const About = () => {
    return <>
        <motion.div variants={textVariant({ delay: 1 })}>
            <p className={styles.sectionSubText}>Introdaction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p variants={fadeIn({ direction: "up", type: "", delay: 0.1, duration: 1 })}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            As a Frontend engineer, I'm passionate about bringing interactivity and innovative ideas to UI design.
            I thrive on using cutting-edge technologies and constantly studying new approaches and tools to solve problems
            in my projects. My drive for staying current in the industry allows me to implement the latest techniques,
            leading to exceptional user experiences
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => <ServiceCard key={service.title} index={index} {...service} />)}
        </div>
    </>
}

export default Default({ Page: About, idName: 'about' })