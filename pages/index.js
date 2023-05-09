import groq from 'groq'
import client from '@/client';

import PostCard from '@/components/PostCard'
import PostHeader from '@/components/PostHeader'


const Index = ({ posts }) => {
  // En son postu ayırıyoruz
  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div>
      {/* En son postu tam boyutta gösteriyoruz */}
      {latestPost && (
        <PostHeader
          key={latestPost._id}
          _id={latestPost._id}
          title={latestPost.title}
          slug={latestPost.slug}
          publishedAt={latestPost.publishedAt}
          mainImage={latestPost.mainImage}
          excerpt={latestPost.excerpt}
        />
      )}

      {/* Diğer postları 2'li gruplar halinde gösteriyoruz */}
      <h3 className='hidden md:flex font-semibold mt-20 mb-8 text-4xl'>Diğer Postlar</h3>
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

    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Index
