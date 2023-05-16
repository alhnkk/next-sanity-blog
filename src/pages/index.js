import { useState } from 'react';
import groq from 'groq';
import client from '../../client';

import PostCard from '../components/PostCard';
import HeaderPost from '../components/HeaderPost';

const Index = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(5);
  const latestPost = posts[0];
  const otherPosts = posts.slice(1, visiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 2);
  };

  return (
    <div>
      {latestPost && (
        <HeaderPost
          key={latestPost._id}
          _id={latestPost._id}
          title={latestPost.title}
          slug={latestPost.slug}
          publishedAt={latestPost.publishedAt}
          mainImage={latestPost.mainImage}
          excerpt={latestPost.excerpt}
        />
      )}

      <h2 className='hidden md:flex font-semibold mt-20 mb-8 text-4xl text-main-900 dark:text-main-300'>Diğer Postlar</h2>
      {otherPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {otherPosts.map(
            ({ _id, title = '', slug = '', publishedAt = '', mainImage, excerpt, name = 'Missing name', authorImage }) =>
              slug && (
                <PostCard
                  key={_id}
                  _id={_id}
                  title={title}
                  slug={slug}
                  publishedAt={publishedAt}
                  mainImage={mainImage}
                  excerpt={excerpt}
                  name={name}
                  authorImage={authorImage}
                />
              )
          )}
        </div>
      )}

      {otherPosts.length < posts.length - 1 && (
        <button
          onClick={loadMorePosts}
          className="text-main-900 dark:text-main-300 font-semibold p-1 my-3 rounded-sm mt-4"
        >
          Daha fazla yükle
        </button>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
