import { Link } from 'react-router-dom'
import logo from '../../assets/trakeroo.webp'

const Navbar = () => {
    return (
        <>
            <header>
                <div class="wrap">
                    <nav  >
                        <a href="#" className="logo ">
                            <span className="h-10 ">
                                <img src={logo} alt="logo" className='object-cover h-full' />
                            </span>
                        </a>
                        <div className="nav-links">
                            <Link to='/'>Home</Link>
                            <a href="#"></a>
                            <a href="#pillars">Product
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </a>
                            <a href="#features">Features</a>
                            <a href="#pricing">Pricing</a>
                            <Link to='/Company'>Company</Link>
                            <a></a>
                        </div>
                        <div className="nav-cta">
                            <a href="#" className="btn btn-ghost">Get a demo</a>
                            <a href="#" className="btn btn-primary">Get Started
                                <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar