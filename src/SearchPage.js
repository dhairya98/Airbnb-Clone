import React from 'react'
import { Button } from '@mui/material'
import './Searchpage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>62 stays. 26th to 30th December - 2 Guests</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of Place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More Filters</Button>
            
            <SearchResult img='https://www.skytraktravel.com/wp-content/uploads/2019/08/21_RoyalRajasthan.jpg' 
              location='Udaipur, Rajasthan' 
              title='Stay at Royal place of Traditional Rajasthan' 
              description='2 Guests, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free Parking, Laundry' 
              star={4.75} 
              price='Rs. 1500/night' 
              total='Rs. 10000/10 days'
            />
            <SearchResult img='https://www.state.gov/wp-content/uploads/2022/01/shutterstock_469708088.jpg' 
              location='Florida, United States' 
              title='Stay at awesome motels in Florida' 
              description='3 Guests, 2 bedroom, 2 bed, 2 shared bathrooms, Wifi, Kitchen, Free Parking, Laundry, Gym' 
              star={4.5} 
              price='Rs. 15000/night' 
              total='Rs. 100000/10 days'
            />
            <SearchResult img='https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/16:9/w_1024%2Cc_limit/GettyImages-539105384.jpg' 
              location='Kedarnath, Uttarakhand' 
              title='A must to visit place' 
              description='2 Guests, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free Parking, Laundry' 
              star={4.75} 
              price='Rs. 2500/night' 
              total='Rs. 20000/10 days'
            />
            <SearchResult img='https://upload.wikimedia.org/wikipedia/commons/1/14/Mumbai_Skyline_at_Night.jpg' 
              location='Mumbai, Maharashtra' 
              title='Stay at the heart of Maharashtra' 
              description='2 Guests, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Accomodation' 
              star={5.00} 
              price='Rs. 5500/night' 
              total='Rs. 50000/10 days'
            />
            <SearchResult img='https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2013/05/India-Briefing-Bangalore-economy-industries-infrastructure.jpg?ssl=1' 
              location='Bengaluru, Karnataka' 
              title='Captial of Karnataka' 
              description='2 Guests, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free Parking, Laundry' 
              star={4.75} 
              price='Rs. 3500/night' 
              total='Rs. 30000/10 days'
            />

        </div>
    </div>
  )
}

export default SearchPage