import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'ceg6vvyr',
  dataset: 'production',
  useCdn: true
});
