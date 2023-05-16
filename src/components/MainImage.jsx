import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';

// A helper function that takes a 'source' parameter and uses 'imageUrlBuilder' to create a URL for the image.
const urlFor = (source) => { return imageUrlBuilder(client).image(source) }

const MainImage = ({ mainImage }) => {
  return (
    <div>
      <img
        src={urlFor(mainImage)
          .width(2000)
          .height(1080)
          .fit('max')
          .auto('format')
          .url()}
        alt="Post Image"
        className='shadow-sm hover:shadow-xl rounded-lg hover:rounded-md duration-300 ease-out delay-100 mt-4 md:mt-0'
      />
    </div>
  );
};

export default MainImage;
