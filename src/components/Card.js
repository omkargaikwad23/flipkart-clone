import React, { useState, useEffect, useCallback } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import FiberManualRecordRounded from '@material-ui/icons/FiberManualRecordRounded'
import FiberManualRecordOutlined from '@material-ui/icons/FiberManualRecordOutlined'
import './card.css'

const Card = ({ offerPrice, actualPrice, image, name, rating }) => {
  var number = parseFloat(actualPrice.split(',').join(''));
  const offer = Math.floor((number - offerPrice) / number * 100)

  offerPrice = offerPrice.toLocaleString('en')

  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel()
  }, [show, carousel])

  return (
    <div className="card">
      <div className="card__heart">
        <FavoriteIcon />
      </div>

      {/* 3 dots effect */}
      {Array(image.length).fill().map((_, i) => {
        if (i === index) {
          return show && <FiberManualRecordRounded className="dots" />
        } else {
          return show && <FiberManualRecordOutlined className="dots" />
        }
      })}
      <div className="card__image">
        <img onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} src={image[index]} alt="images" />
      </div>
      <div className="productDet">
        <div className="card__details">
          <span className="title">{name}</span>
          <span className="ratings">
            {rating} <StarIcon />
          </span>

          <p>Top Picks On Fashion</p>
          <span className="span1">₹{offerPrice}</span>
          <span className="span2">₹{actualPrice}</span>
          <span className="span3">{offer}% off</span>
        </div>
        <div className="card__size">
          <p>
            size <span>6,7,8,9</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
