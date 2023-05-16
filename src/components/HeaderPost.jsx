import Link from 'next/link';
import MainImage from './MainImage';
import { TbClockHour3 } from "react-icons/tb"

const HeaderPost = ({ _id, title, slug, publishedAt, mainImage, excerpt }) => {
  return (

    <div
      key={_id}
      className="mb-16">

      {/* Link to the post page */}
      <Link
        href={`/post/${encodeURIComponent(slug.current)}`}>

        {/* Render the main image if available */}
        {
          mainImage
          &&
          <MainImage
            mainImage={mainImage} />
        }

        {/* Header Post title, date and excerpt */}

        <div
          className="mt-3 md:mt-4 grid md:grid-cols-2 items-start">
          <div>

            {/* Title */}
            <h2
              className="text-main-950 dark:text-main-100 mb-1 text-2xl leading-snug lg:text-5xl hover:underline">
              {title}
            </h2>

            {/* Date */}
            <div
              className="flex text-main-900 dark:text-main-400 mb-2 text-sm md:text-lg md:mb-0 items-center gap-x-1">
              <TbClockHour3 
              className='w-4.5 h-4.5'/>
              {
                new Date(publishedAt).toLocaleDateString('tr-TR', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })
              }
            </div>
          </div>

          {/* Excerpt */}
          <div
            className="text-main-900 dark:text-main-200 mt-3 md:mt-0 text-sm md:leading-8 font-medium line-clamp-2 md:line-clamp-4">
            <p>
              {excerpt}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderPost;
