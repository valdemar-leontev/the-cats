import React, { useMemo } from 'react'
import './card.scss'

export type CardProps = {
    imageUrl: string
}

const Card = ({imageUrl} : CardProps) => {
  return (
    <>
        <div className="app__card">
            <img src={imageUrl} alt={`${imageUrl}`} />

            <div className="app__card-heart"></div>
        </div>
    </>
  )
}

export default Card