export const ImageGalleryItem = data => {
  const { webformatURL, tags, id, largeImageURL, imageUrl } = data;

  return (
    <li key={id} value={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => imageUrl(largeImageURL)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
