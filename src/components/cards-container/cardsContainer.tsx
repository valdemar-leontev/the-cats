import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { CatImageModel } from '../../models/cat-image-model';
import Card from '../card/card';
import './cardsContainer.scss'

const CardsContainer = () => {

  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<CatImageModel[]>([]);

  const getImagesAsync = useCallback( async (page: number) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://api.thecatapi.com/v1/images/search',
        headers: {
          api_key: process.env.REACT_APP_API_KEY as string
        },
        params: {
          size: 'small',
          order: 'asc',
          limit: 25,
          page: page,
          mime_types: 'jpg,png'
        }
      });

      return response.data as CatImageModel[];
    }
    catch {
      return [];    
    }
  }, []);

  useEffect(() => {
    (async () => {
      const images = await getImagesAsync(page);
      setImages(images);
    })();
  }, [])
  

  return (
    <div className="app__cards-container">
        {images.map((image, index) => <Card imageUrl={image.url} key={`image - ${index}`} />)}
    </div>
  )
}

export default CardsContainer;