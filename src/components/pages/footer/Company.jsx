import React from 'react'
import { Link } from 'react-router-dom'

const Company = () => {
    return (
        <div className="fcol">
            <h5>Company</h5>

            <a href="#">About Us</a>

            <Link to='/Career'>Careers</Link>

            <a href="#">Blog</a>

            <a href="#">Case Studies</a>

            <a href="#">Contact</a>
        </div>

    )
}

export default Company