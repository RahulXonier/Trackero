import { Link } from 'react-router-dom'
import { blogPageData } from '../../../data/blog'
import { act, useEffect, useState } from 'react'

const Left = () => {
    const { featuredPost, posts, categories } = blogPageData

    const [active, setActive] = useState('All')
    const [activeIn, setActiveIn] = useState(0)
    console.log('active :', active)
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (active === "All") {
            setFilterData(posts);
        } else {
            setFilterData(
                posts.filter((e) => e.category === active)
            );
        }
    }, [active, posts]);



    return (
        <div className='w-full h-full flex flex-col gap-6'>

            <div className='flex gap-4'>
                {
                    categories.map((i, ind) => {
                        return (
                            <div key={ind}
                                onClick={() => {
                                    setActiveIn(ind)
                                    setActive(i)
                                }}
                                className={`py-2 px-3 border rounded-2xl border-slate-200 bg-slate-100 text-slate-400 cursor-pointer ${ind === activeIn ? 'text-white bg-gradient-to-r from-[#16c2cf] to-[#0fb8a5]' : ''}  text-[14.5px]`}>
                                {i}
                            </div>
                        )
                    })
                }
            </div>

            {/* Featured Post */}
            {/* <div className='grid lg:grid-cols-2 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm'>

                <div className='bg-gradient-to-br from-cyan-400 to-emerald-400 p-6 flex items-center justify-center'>
                    <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className='w-full object-cover'
                    />
                </div>

                <div className='p-8 flex flex-col justify-center'>

                    <span className='inline-flex w-fit px-4 py-1 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium'>
                        {featuredPost.category}
                    </span>

                    <h2 className='text-3xl font-bold text-[#043264] mt-4'>
                        {featuredPost.title}
                    </h2>

                    <p className='text-slate-500 mt-4 leading-7'>
                        {featuredPost.excerpt}
                    </p>

                    <div className='flex items-center gap-4 mt-6 text-sm text-slate-400'>
                        <span>{featuredPost.author.name}</span>
                        <span>•</span>
                        <span>{featuredPost.publishDate}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                    </div>

                    <Link
                        to={`/blog/${featuredPost.slug}`}
                        className='mt-6 w-fit px-6 py-3 rounded-xl bg-gradient-to-r from-[#1ba2c3] to-[#33bf8b] text-white font-medium'
                    >
                        Read Article
                    </Link>

                </div>
            </div> */}

            {/* Blog List */}
            {filterData.map((post) => (
                <article
                    key={post.id}
                    className='grid lg:grid-cols-2 bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-lg duration-300'
                >

                    <div className='bg-slate-50'>
                        <img
                            src={post.image}
                            alt={post.title}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='p-8'>

                        <span className='inline-flex px-4 py-1 rounded-full bg-cyan-50 text-cyan-600 text-sm'>
                            {post.category}
                        </span>

                        <h3 className='text-2xl font-bold text-[#043264] mt-4'>
                            {post.title}
                        </h3>

                        <p className='mt-4 text-slate-500 leading-7'>
                            {post.excerpt}
                        </p>

                        <div className='flex items-center gap-4 mt-6 text-sm text-slate-400'>
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.publishDate}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        <Link
                            to={`/blog/${post.slug}`}
                            className='inline-block mt-6 text-cyan-600 font-semibold'
                        >
                            Read More →
                        </Link>

                    </div>

                </article>
            ))}
        </div>
    )
}

export default Left