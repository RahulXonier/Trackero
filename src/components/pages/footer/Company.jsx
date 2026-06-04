import { Link } from 'react-router-dom'

const Company = () => {
    return (
        <div className="fcol">
            <h5>Company</h5>

            <a href="#">About Us</a>

            <Link to='/Career'
                onClick={() => window.scrollTo(0, 0)}>Careers</Link>

            <Link to='/Blogs' onClick={() => window.scrollTo(0, 0)}>Blog</Link>

            <a href="#">Case Studies</a>

            <a href="#">Contact</a>
        </div>

    )
}

export default Company