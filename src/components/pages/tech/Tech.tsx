import { technologies } from "../../../utils/constants"
import { Ball } from "../../atoms"
import { Default } from "../../templates"

const Tech = () => {
    return <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => <div className="w-28 h-28" key={technology.title}>
            <Ball icon={technology.icon} />
        </div>)}
    </div>
}

export default Default({ Page: Tech, idName: 'technologies' }) 