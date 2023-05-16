import imageUrlBuilder from '@sanity/image-url'
import client from "../../client"
import Image from 'next/image'

// A helper function that uses 'imageUrlBuilder' to create a URL for the image.
const urlFor = (source) => { return imageUrlBuilder(client).image(source) }


const DetailHeader = ({ title, authorImage, name }) => {
    return (
        <div>
            <div
                className='my-8 md:mr-48'>
                {/* Post Detail Title */}
                <h1
                    className='text-main-black hover:text-main-950 dark:text-main-100 dark:hover:text-main-300 text-3xl font-medium  
                    md:text-7xl md:font-extrabold'>
                    {title}
                </h1>
                
                {/* Author Image */}
                <div
                    className='flex items-center mb-0.5 my-8 font-extrabold cursor-pointer'>
                    {
                        authorImage
                        &&
                        <Image
                            src={urlFor(authorImage)
                                .width(500)
                                .url()}
                            alt={`${name}'s picture`}
                            width={50}
                            height={50} />
                    }

                    {/* Author Name */}
                    <span
                        className='dark:text-main-300 font-semibold'>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader