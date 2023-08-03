import { VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from "..";
import { Tooltip } from 'react-tooltip'

interface IExperienceCard {
    title: string,
    companyName: string
    icon: string
    iconBg: string
    date: string
    points: string[]
}

const skills = [
    { title: 'React', bgColor: 'bg-[#61dafb]' },
    { title: 'AWS', bgColor: 'bg-[#ff9d00]' },
    { title: 'Storybook', bgColor: 'bg-[#ff4785]' },
    { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
    { title: 'Javascript', bgColor: 'bg-[#f7df1e]' },
    { title: 'Tailwindcss', bgColor: 'bg-[#38bef8]' },
    { title: 'Redux', bgColor: 'bg-[#764abc]' }
]


const ExperienceCard = ({ date, iconBg, icon, title, companyName, points }: IExperienceCard) => {
    return <VerticalTimelineElement contentStyle={{
        background: '#1d1836', color: '#fff',
    }}
        contentArrowStyle={{ borderRight: '10px solid #1d1836' }}
        date={date}
        iconStyle={{ background: iconBg }}
        icon={<div className="flex justify-center items-center w-full h-full">
            <img src={icon} alt={companyName} className="w-[70%] h-[70%]" />
        </div>}
    >
        <div>
            <h3 className="text-white text-[24px] text-bold">{title}</h3>
            <div className="flex">
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{companyName}</p>
                <span className="ml-2 cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content="Remote">🌍</span>
                <Tooltip id="my-tooltip" place="right" />
            </div>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, index) => <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>)}
        </ul>
        <div className="flex flex-wrap gap-2 justify-center mt-5">
            {skills.map(skill => <Badge {...skill} />)}
        </div>
    </VerticalTimelineElement>
}

export default ExperienceCard