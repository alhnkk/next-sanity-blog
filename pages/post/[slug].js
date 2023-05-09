import groq from 'groq'
import client from '@/client'


import MainImage from '@/components/MainImage'
import BackButton from '@/components/BackButton'
import DetailHeader from '@/components/DetailHeader'
import PostContent from "@/components/PostContent"
import Navbar from '@/components/Navbar'



const Post = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
    mainImage
  } = post
  return (
    <div>
      {/* <BackButton /> */}
      <article>

        <DetailHeader
          title={title}
          name={name}
          categories={categories}
          authorImage={authorImage}
        />

        <MainImage
          mainImage={mainImage}
        />

        <PostContent
          body={body}
        />
      </article>
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    body,
    mainImage
  }`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post