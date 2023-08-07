import { Robot, Scroller } from "../../atoms"
import Greetings from "../../organisms/greetings/Greetings"

const Hello = () => {
    return <section className='w-full h-screen mx-auto'>
        <Greetings />
            <Robot />
        <Scroller flag='#about' />
    </section>
}

export default Hello