import { ElementType } from "react"

interface IContactButton {
    Icon: ElementType
    name: string
    description?: string
    link: string
}
const ContactButton = ({ Icon, name, description, link }: IContactButton) => {
    return <div className="flex flex-col justify-center gap-10 bg-transparent text-white hover:text-secondary transition-all">
        <a className="flex justify-center flex-col items-center gap-1" href={link}>
            <Icon className="w-20 h-20" />
            {name}
            {description && <p>{description}</p>}
        </a>
    </div>
}

export default ContactButton