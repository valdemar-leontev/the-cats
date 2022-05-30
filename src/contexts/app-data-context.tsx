import axios from 'axios';
import { createContext, useCallback, useContext } from 'react';
import { FavoriteImageModel } from '../models/favorite-image-model';
import { ImageModel } from '../models/image-model';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common = {
  'x-api-key': process.env.REACT_APP_API_KEY as string,
};

export type AppDataContextModel = {
  getImagesAsync: (page: number) => Promise<ImageModel[]>;
  saveImageAsFavoriteAsync: (imageId: string) => Promise<any>;
  getFavoriteImagesAsync: (page: number) => Promise<FavoriteImageModel[]>;
};

const AppDataContext = createContext({} as AppDataContextModel);

function AppDataContextProvider(props: any) {
  const getImagesAsync = useCallback(async (page: number) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: '/images/search',
        params: {
          size: 'small',
          order: 'asc',
          limit: 25,
          page: page,
          mime_types: 'jpg,png',
        },
      });

      return response.data as ImageModel[];
    } catch {
      return [];
    }
  }, []);

  const saveImageAsFavoriteAsync = useCallback(async (imageId: number) => {
    try {
      const response = await axios.request({
        method: 'POST',
        url: '/favourites',
        data: {
          sub_id: 'valdemar-leontev-2002-10-27',
          image_id: imageId,
        },
      });

      return response.data;
    } catch {
      return null;
    }
  }, []);

  const getFavoriteImagesAsync = useCallback(async (page: number) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: '/favourites',
        params: {
          sub_id: 'valdemar-leontev-2002-10-27',
          page: page,
          limit: 25
        }
      });

      return response.data as FavoriteImageModel[];
    } catch {

      return null;
    }
  }, []);

  return <AppDataContext.Provider value={{ getImagesAsync, saveImageAsFavoriteAsync, getFavoriteImagesAsync }} {...props} />;
}

const useAppData = () => useContext(AppDataContext);

export { AppDataContextProvider, useAppData };
