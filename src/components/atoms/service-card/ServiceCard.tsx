import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { fadeIn } from "../../../utils/motion"

interface IServiceCard {
    title: string,
    icon: string,
    index: number
}
const ServiceCard = ({ title, index, icon }: IServiceCard) => {
    return <Tilt options={{ scale: 1 }} className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn({ direction: 'right', type: "spring", delay: 0.5 * index, duration: 0.75 })}
            className="w-full orange-pink-gradient p-[5px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
}

export default ServiceCard