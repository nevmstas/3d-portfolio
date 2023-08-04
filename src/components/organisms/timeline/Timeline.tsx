
import { experiences } from "../../../utils/constants"
import ExperienceCard from "../../atoms/experience-card/ExperienceCard"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import baby from '../../../assets/baby.png'
const Timeline = () => {
    return <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#fff">
            {experiences.map((experience, index) => <ExperienceCard key={index} {...experience} />)}
            <VerticalTimelineElement
                iconStyle={{ background: '#63c5da', color: '#fff' }}
                icon={<div className="flex justify-center items-center w-full h-full">
                    <img src={baby} className="w-[70%] h-[70%]" />
                </div>}
            />
        </VerticalTimeline>
    </div>
}

export default Timeline