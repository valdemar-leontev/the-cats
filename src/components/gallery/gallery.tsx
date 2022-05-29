import './gallery.scss'
import { useEffect, useState } from 'react'
import { useAppData } from '../../contexts/app-data-context';
import { CatImageModel } from '../../models/cat-image-model';
import ImageCard from '../image-card/image-card';


const Gallery = () => {

  const [page] = useState<number>(1);
  const [images, setImages] = useState<CatImageModel[]>([]);

  const {getImagesAsync} = useAppData();

  useEffect(() => {
    (async () => {
      const images = await getImagesAsync(page);
      setImages(images);
    })();
  }, [getImagesAsync, page])
  

  return (
    <div className="app__cards-container">
        {images.map((image, index) => <ImageCard image={image} key={`image - ${index}`} />)}
    </div>
  )
}

export default Gallery;