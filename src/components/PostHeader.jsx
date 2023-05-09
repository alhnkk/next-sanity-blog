import Link from 'next/link';
import MainImage from './MainImage';

const Post = ({ _id, title, slug, publishedAt, mainImage, excerpt }) => {
  return (
    <div key={_id} className="mb-16">
      <Link href={`/post/${encodeURIComponent(slug.current)}`}>
        {mainImage && <MainImage mainImage={mainImage} />}

        <div className="mt-3 md:mt-4">
          <h2 className="text-main-950 dark:text-main-100 mb-1 text-2xl leading-snug lg:text-3xl link-underline link-underline-black">
            {title}
          </h2>
          <span className="text-main-900 dark:text-main-400 mb-2 text-sm md:text-lg md:mb-0">
            {new Date(publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <div className="text-main-900 dark:text-main-200 mt-3 md:mt-2 text-sm md:leading-8 font-medium line-clamp-2 md:line-clamp-4">
            <p>{excerpt}</p>
          </div>
        </div>

      </Link>
    </div>
  );
};

export default Post;
