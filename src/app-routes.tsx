import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import ImageGallery from './components/image-gallery/image-gallery';
import { useAppData } from './contexts/app-data-context';
import { ImageModel } from './models/image-model';
import { ImageGalleryModeModel } from './models/image-gallery-mode-model';

export const AppRoutes = () => {
  const { getImagesAsync, getFavoriteImagesAsync } = useAppData();
  const [images, setImages] = useState<ImageModel[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      switch (pathname) {
        case '/':
          const images = await getImagesAsync(0);
          setImages(images);
          break;

        case '/favorites':
          const favoriteImages = await getFavoriteImagesAsync(0);
          setImages(favoriteImages.map((f) => f.image));
          break;

        default:
          setImages([]);
          break;
      }
    })();
  }, [pathname, getImagesAsync, getFavoriteImagesAsync]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <ImageGallery mode={ImageGalleryModeModel.all} images={images} />
        }
      />
      <Route
        path='/favorites'
        element={
          <ImageGallery
            mode={ImageGalleryModeModel.favorites}
            images={images}
          />
        }
      />
    </Routes>
  );
};
