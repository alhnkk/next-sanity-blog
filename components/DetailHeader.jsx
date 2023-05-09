import imageUrlBuilder from '@sanity/image-url'
import client from "../client"
import React from 'react'



function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}
const DetailHeader = ({ title, authorImage, name, categories }) => {
    return (
        <div>
            <div className='my-8 md:mr-48'>
                <h1 className='text-main-black hover:text-main-950 dark:text-main-100 dark:hover:text-main-300 text-3xl font-medium  md:text-7xl md:font-extrabold'>{title}</h1>
                <div className='flex items-center mb-0.5 my-8 font-extrabold cursor-pointer'> {authorImage && (
                    <div>
                        <img
                            src={urlFor(authorImage)
                                .width(50)
                                .url()}
                            alt={`${name}'s picture`}
                        />
                    </div>
                )}
                    <span className='dark:text-main-300 font-semibold'>{name}</span>
                </div>
                {/* {categories && (
                    <ul className='font-semibold flex items-center gap-1 my-8'>
                        {categories.map(category => <li className='bg-[#a6ff99] py-1 px-4 rounded-lg' key={category}>{category}</li>)}
                    </ul>
                )} */}
            </div>
        </div>
    )
}

export default DetailHeader