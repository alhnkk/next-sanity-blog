import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ceg6vvyr',
  dataset: 'production',
  useCdn: true
});