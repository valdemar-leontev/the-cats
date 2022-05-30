import './image-card.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import { useAppData } from '../../contexts/app-data-context';
import { ImageCardProps } from '../../models/image-card-props';

const ImageCard = ({ image }: ImageCardProps) => {
  const { id, url } = image;

  const [active, setActive] = useState(false);
  const { saveImageAsFavoriteAsync } = useAppData();

  const onHeartClick = useCallback(async () => {
    await saveImageAsFavoriteAsync(id);
    setActive((prev) => !prev);
  }, [id, saveImageAsFavoriteAsync]);

  return (
    <>
      <div className='app__card'>
        <img src={url} alt={`${url}`} />

        <div
          className={
            active === false
              ? 'app__card-inactiveHeart'
              : 'app__card-activeHeart'
          }
          onClick={onHeartClick}
        >
          {active === false ? (
            <AiOutlineHeart size={30} color={'red'} />
          ) : (
            <AiFillHeart size={30} color={'red'} />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
