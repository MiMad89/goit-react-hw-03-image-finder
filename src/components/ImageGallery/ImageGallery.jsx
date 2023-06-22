import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, imageUrl }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        const { webformatURL, tags, id, largeImageURL } = image;
        return(
        <ImageGalleryItem
          webformatURL={webformatURL}
          tags={tags}
          id={id}
          largeImageURL={largeImageURL}
          imageUrl={imageUrl}
        />
        )
      })}
    </ul>
  );
};
