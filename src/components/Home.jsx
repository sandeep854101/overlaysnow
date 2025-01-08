
import React from 'react'
import CircleView from './skeleton/CircleView'
import { CircleImageData, Section3_Image, ThreeImageShowData } from './data/AllData'
import RoundedImage from './skeleton/RoundedImage'
import ThreeImageShow from './skeleton/ThreeImageShow'

const Home = () => {
  return (
    <div>
      <CircleView CircleImageData={CircleImageData} />
      <RoundedImage heading="Trending Now" Section3_Image={Section3_Image} />
      <ThreeImageShow  heading="New Arrivals" ThreeImageShowData={ThreeImageShowData} />
      <RoundedImage heading="Fresh Finds" Section3_Image={Section3_Image} />
      <CircleView CircleImageData={CircleImageData} />
      <RoundedImage heading="Seasonal Favorites" Section3_Image={Section3_Image} />
      <ThreeImageShow  heading="Latest Styles" ThreeImageShowData={ThreeImageShowData} />
      <RoundedImage heading="Just In" Section3_Image={Section3_Image} />
      
    </div>
  )
}

export default Home
