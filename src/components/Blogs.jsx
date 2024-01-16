import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
// import Card from './Card';

const Blogs = () => {
    // step 3 --> Consume
    // consume karnyasathi aplyakade useContext() navacha hook ahe te use kartat.
    const { loading, posts } = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
        {
            loading ? (<Spinner />) : (
                posts.length === 0 ? (<div>
                    <p>No Posts Available</p>
                </div>) : (posts.map((post) => (
                    <div key={post.id}>
                        <p className='font-bold text-lg'>{post.title}</p>
                        <p className='text-[18px] mt-[4px]'>By <span className='italic'>{post.author} on <span className='underline font-bold'>{post.category}</span></span></p>
                        <p className='text-[15px] mt-[4px]'>Posted on {post.date}</p>
                        <p className='text-[17px] mt-[14px]'>{post.content}</p>
                        <div className='flex gap-x-3 flex-wrap'>
                            {post.tags.map((tag, index) => {
                                return <span className='text-blue-600 font-bold underline text-[12px] cursor-pointer mt-[5px]' key={index}>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                ) ))
            )
        }
    </div>
  )
}

export default Blogs;