
import { Link } from 'react-router-dom'
import { careersPageData } from '../../../data/careers'

const Last = () => {
    const data = careersPageData.cta
    return (
        <div className='w-full min-h-[50vh] pb-20  '>
            <div className='max-w-7xl h-full mx-5  md:mx-auto '>

                <div className=" rounded-3xl bg-gradient-to-r from-[#1ba2c3] to-[#33bf8b] p-12 text-center text-white">
                    <h3 className="text-4xl font-bold">
                        {data.title}
                    </h3>

                    <p className="mt-4 text-white/90 max-w-2xl mx-auto">
                        {data.desc}
                    </p>
                    <Link to='/PayPal'
                        onClick={() => scrollTo(0, 0)}>
                        <button className="mt-8 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold">
                            {data.button}
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default Last