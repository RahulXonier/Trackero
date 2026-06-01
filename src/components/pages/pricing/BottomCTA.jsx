import React from 'react'
import { Link } from 'react-router-dom'

const BottomCTA = () => {
    return (
        <div className='w-full min-h-[50vh] py-20'>
            <div className='max-w-7xl h-full mx-auto'>

                <div className=" rounded-3xl bg-gradient-to-r from-[#1ba2c3] to-[#33bf8b] p-12 text-center text-white">
                    <h3 className="text-4xl font-bold">
                        Ready to Scale Your Business?
                    </h3>

                    <p className="mt-4 text-white/90 max-w-2xl mx-auto">
                        Join thousands of teams using Trakeroo to manage projects,
                        track performance, and grow faster.
                    </p>
                    <Link to='/PayPal'
                        onClick={() => scrollTo(0, 0)}>
                        <button className="mt-8 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold">
                            Start Free Trial
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default BottomCTA