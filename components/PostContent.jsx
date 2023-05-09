import { PortableText } from '@portabletext/react'
import BackButton from './BackButton'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'




function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const PostContent = ({ body }) => {
  return (

      <div className="container antialiased	 mx-auto max-w-sm md:max-w-3xl mt-8 md:mt-16 mb-24 leading-loose tracking-tighter text-justify text-main-900 dark:text-main-100  text-lg">
        <PortableText
          className="text-content"
          value={body}
          components={ptComponents}
        />
        <BackButton />
      </div>

  )
}

export default PostContent