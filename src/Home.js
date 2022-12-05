import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
        <Banner />
        <div className='home__section'>
          <Card src='https://media.istockphoto.com/id/1255236227/photo/customer.jpg?s=612x612&w=0&k=20&c=jEGLUODjldGK_8qXKvxkqkxKkrors-f0agoDdt0TG_U=' title='Online Experiences' description='Unique activities we can do together led by a world of hosts'/>
          <Card src='https://i.natgeofe.com/n/5adfa643-6722-4fc3-ab7b-301d7d2050ad/igloo-golden-crown-levin-iglut-levi-finland_3x2.jpg' title='Unique Stays' description='Spaces that are more than just a place to sleep, Greater Fun'/>
          <Card src='https://cdn.decoist.com/wp-content/uploads/2020/10/Gorgeous-use-of-sliding-glass-doors-connect-the-entire-home-with-the-landscape-outside-it-51813.jpg' title='Entire Homes' description='Comfortable private places for friends and family for amazing experience'/>
          
        </div>
        <div className='home__section'>
          <Card src='https://static.mansionglobal.com/production/media/article-images/05f2121890e5a320adf07161ba446e19/large_The-Heron-South-Penthouse-Main-Reception.jpg' title='Penthouse in London' description='Enjoy the amazing sights of London with Stunning penthouse' price='Rs. 19900'/>
          <Card src='https://images.thrillophilia.com/image/upload/s--AC7EInAl--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/013/736/original/1626253725_shutterstock_1840637584.jpeg.jpg' title='Fly to Ladakh!' description='Superplace with great amenities and amazing and awesome sightseeings' price='Rs. 9900'/>
          <Card src='https://www.euttaranchal.com/tourism/photos/kedarnath-2802883.jpg' title='Trip to Kedarnath' description='Getting an amazing view of Holy place Kedarnath. Hassles on us. Enjoyment on you' price='Rs. 6990'/>
          
        </div>
    </div>
  )
}

export default Home