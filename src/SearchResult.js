import { Favorite, Star } from '@mui/icons-material'
import React from 'react'
import './SearchResult.css'

function SearchResult({img,location,title,description,star,price,total}) {
  return (
    <div className='searchResult'>
        <img src={img} alt='' />
        <Favorite className='searchResult__heart' />
        <div className='searchResult__info'>
          <div className='searchResult__infoTop'>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>_____</p>
            <p>{description}</p>
          </div>
          <div className='searchResult__infoBottom'>
            <div className='searchResult__stars'>
              <Star className='searchResult__star' />
              <p><strong>{star}</strong></p>
            </div>
            <div className='searchResult__Price'>
              <h2>{price}</h2>
              <p>{total}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SearchResult