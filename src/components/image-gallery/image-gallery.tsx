import './image-gallery.scss';
import { useState } from 'react';
import ImageCard from '../image-card/image-card';
import { ImageGalleryProps } from '../../models/image-gallery-props';

const ImageGallery = ({ mode, images } : ImageGalleryProps) => {

  const [page] = useState<number>(1);

  return (
    <div className='app__cards-container'>
        {images.map(image => <ImageCard image={image} key={image.id} />)}
    </div>
  );
};

export default ImageGallery;