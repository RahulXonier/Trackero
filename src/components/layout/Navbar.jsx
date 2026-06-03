import { Link } from 'react-router-dom'
import logo from '../../assets/trakeroo.webp'
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from '../common/DropDown';
import { SolutionData } from '../../data/solution';




const Navbar = () => {
    return (
        <>
            <header  >
                <div class="wrap z-99">
                    <nav  >
                        <Link to='/'
                            onClick={() => window.scrollTo(0, 0)}
                            className="logo ">
                            <span className="h-10 ">
                                <img src={logo} alt="logo" className='object-cover h-full' />
                            </span>
                        </Link>
                        <div className='flex gap-15'>
                            <div className="nav-links">
                                <Link to='/'
                                    onClick={() => window.scrollTo(0, 0)}
                                >Home
                                </Link>



                                <Link to='/Feature'
                                    onClick={() => window.scrollTo(0, 0)}>Features</Link>

                                <span className="group relative flex gap-1 py-4 items-center cursor-pointer hover:text-blue-500">
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
                                <Link to='/Pricing'
                                    onClick={() => window.scrollTo(0, 0)}>Pricing</Link>
                                <Link to='/Company'
                                    onClick={() => window.scrollTo(0, 0)}>Company</Link>
                                <a></a>
                            </div>
                            <div className="nav-cta">
                                <Link to='/Form' className="btn btn-ghost"
                                    onClick={() => window.scrollTo(0, 0)}>Get a demo</Link>
                                <Link
                                    onClick={() => scrollTo(0, 0)}
                                    to='/PayPal' className="btn btn-primary">Get Started
                                    <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                </Link>
                            </div>

                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar