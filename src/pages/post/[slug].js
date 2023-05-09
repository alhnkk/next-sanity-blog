'use client'

import groq from 'groq'
import client from '../../../client'

import MainImage from '../../components/MainImage'
import DetailHeader from '../../components/DetailHeader.jsx'
import PostContent from '../../components/PostContent.jsx'


const Post = ({ post }) => {
  const {
    title = "Missing name",
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
    mainImage
  } = post
  return (
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
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[],
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
    fallback: false,
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
