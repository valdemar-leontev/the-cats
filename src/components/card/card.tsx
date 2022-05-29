import './card.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

export type CardProps = {
    imageUrl: string
}

const Card = ({imageUrl} : CardProps) => {

  const [active, setActive] = useState(false)

  const onHeartClick = () => {
    setActive(!active);
  }

  return (
    <>
        <div className="app__card">
            <img src={imageUrl} alt={`${imageUrl}`} />

            <div className="app__card-heart" onClick={onHeartClick}>
              {active == false ? <AiOutlineHeart size={30} color={'red'}/> : <AiFillHeart size={30} color={'red'}/>}
            </div>
        </div>
    </>
  )
}

export default Card