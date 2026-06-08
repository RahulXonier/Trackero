import { Link } from 'react-router-dom'
import logo from '../../assets/trakeroo.webp'
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from '../common/DropDown';
import { SolutionData } from '../../data/solution';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';
import { TbXboxX } from 'react-icons/tb';
import NavbarComponent from '../common/NavbarComponent';




const Navbar = () => {
    const [drop, setDrop] = useState(false)
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(false)
        setDrop(false)
        window.scrollTo(0, 0)

    }
    return (
        <>
            <header className='relative' >
                <div class="max-w-7xl mx-auto z-99 px-4 ">
                    <nav className=' flex   items-center border rounded-full justify-between px-6 py-3 border-slate-200 bg-white/80'  >
                        <Link to='/'
                            onClick={() => window.scrollTo(0, 0)}
                            className="logo ">
                            <span className="h-10 ">
                                <img src={logo} alt="logo" className='object-cover h-full' />
                            </span>
                        </Link>
                        <div className='flex gap-15'>
                            <div
                                className=
                                "hidden lg:flex gap-[30px] font-[500] text-[15px] text-[var(--ink-500)] items-center"

                            >
                                {
                                    active &&
                                    <span className='text-2xl text-cyan-600 flex justify-end' onClick={() => setActive(false)}><TbXboxX /></span>

                                }
                                <Link className='py-4 ' to='/' onClick={handleClick}>
                                    Home
                                </Link>
                                <Link className='py-4 ' to='/Feature'
                                    onClick={handleClick}>Features</Link>

                                <span className="group relative flex gap-1 py-4  items-center cursor-pointer hover:text-blue-500">
                                    Solution
                                    <IoMdArrowDropdown className="text-lg transition-transform duration-300 group-hover:rotate-180" />

                                    {/* Dropdown */}
                                    <div className="absolute top-20 right-0  bg-white flex gap-5 shadow-xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                                        {
                                            SolutionData.map((i) => (
                                                <DropDown key={i.id} top={i.top} title={i.title} items={i.items} />
                                            ))
                                        }
                                    </div>


                                </span>
                                <Link className='py-4 ' to='/Pricing'
                                    onClick={handleClick}>Pricing</Link>
                                <Link
                                    className='py-4 '
                                    to='/Company'
                                    onClick={handleClick}>Company</Link>
                            </div>
                            <div className="nav-cta hidden lg:flex py-4 md:py-0 gap-8">
                                <Link to='/Form' className="btn btn-ghost"
                                    onClick={handleClick}>Get a demo</Link>
                                <Link
                                    onClick={handleClick}
                                    to='/PayPal' className="btn btn-primary">Get Started
                                    <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                </Link>
                            </div>

                        </div>
                        <div className='flex lg:hidden text-2xl px-5 text-cyan-600' onClick={() => setActive(!active)}><TiThMenu />



                        </div>

                    </nav>

                </div>
                {
                    active &&
                    <NavbarComponent handleClick={handleClick} drop={drop} setDrop={setDrop} setActive={setActive} active={active} logo={logo} />

                }

            </header>
        </>
    )
}

export default Navbar