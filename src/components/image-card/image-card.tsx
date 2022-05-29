import './image-card.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import { CatImageModel } from '../../models/cat-image-model';
import { useAppData } from '../../contexts/app-data-context';

export type ImageCardProps = {
  image: CatImageModel;
};

const ImageCard = ({image} : ImageCardProps) => {
  const {id, url} = image;

  const [active, setActive] = useState(false);
  const {saveImageAsFavoriteAsync} = useAppData();

  const onHeartClick = useCallback(async () => {
    
    const response = await saveImageAsFavoriteAsync(id);
    setActive(prev => !prev);
  }, [id, saveImageAsFavoriteAsync]);

  return (
    <>
        <div className="app__card">
            <img src={url} alt={`${url}`} />

            <div className={active === false ? 'app__card-inactiveHeart' : 'app__card-activeHeart'} onClick={onHeartClick}>
              {active === false ? <AiOutlineHeart size={30} color={'red'}/> : <AiFillHeart size={30} color={'red'}/>}
            </div>
        </div>
    </>
  )
}

export default ImageCard