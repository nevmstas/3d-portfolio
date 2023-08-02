import { motion } from "framer-motion"
import { styles } from "../../../styles"

interface IDefaultTemplate {
    Page: any
    idName: string
}

const DefaultTemplate = ({ idName, Page }: IDefaultTemplate) => () => {
    return <motion.section initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        <Page />
    </motion.section>
}

export default DefaultTemplate