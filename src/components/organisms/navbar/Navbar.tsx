import { styles } from '../../../styles'
import Logo from '../../../../logo.png'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    const handleSetActive = () => {
        setActive('')
        window.scrollTo(0, 0)
    }

    const handlToggleClick = () => {
        setToggle((toggle => !toggle))
    }

    return <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link to='/' className='flex items-center gap-2' onClick={handleSetActive}>
                <img src={Logo} alt='logo' className='w-14 h-14 object-contain' />
                <p className='text-white text-[18px] font-bold cursor-pointer flex'>Stas &nbsp;<span className='sm:block hidden'>| Frontend Engineer</span></p>

            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map(link => (<li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'
                    } hover:text-white text-[18px] font-medium cursor-pointer`}>
                    <a href={`#${link.id}`} onClick={
                        () => {
                            setActive(link.title)
                        }
                    }>{link.title}</a>
                </li>))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <a onClick={handlToggleClick} className='cursor-pointer'>
                    {toggle ? <AiOutlineCloseCircle className="w-[28px] h-[28px]" /> : <AiOutlineMenu className="w-[28px] h-[28px]" />}
                </a>
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className='list-none flex justify-end items-start flex-col'>
                        {navLinks.map(link => (<li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'
                            } font-poppons hover:text-white text-[16px] font-medium cursor-pointer `} onClick={handlToggleClick}>
                            <a href={`#${link.id}`} onClick={
                                () => {
                                    setActive(link.title)
                                    setToggle(false)
                                }
                            }>{link.title}</a>
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar