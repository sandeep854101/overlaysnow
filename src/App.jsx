import React from 'react'
import { NavbarData, Section1_Image, Section2_Video, CircleImageData, Section3_Image, Section4_Video, Section5_Image, ThreeImageShowData, Section6_Image,Section7_Image,Section8_Image,Section9_Image,FooterData } from './components/AllData'
import Navbar from './components/Navbar'
import WhatsAppIcon from './components/WhatsAppIcon'
import ImageView from './components/ImageView'
import VideoView from './components/VideoView'
import CircleView from './components/CircleView'
import RoundedImage from './components/RoundedImage'
import ImageInsta from './components/ImageInsta'
import ThreeImageShow from './components/ThreeImageShow'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar navbar={NavbarData} />
      <WhatsAppIcon />
      <ImageView image={Section1_Image} />
      <CircleView CircleImageData={CircleImageData} />
      <VideoView videoData={Section2_Video} />
      <RoundedImage heading="NEW IN" Section3_Image={Section3_Image} />
      <VideoView videoData={Section4_Video} />
      <ImageInsta heading="Community Archives" Section5_Image={Section5_Image} />
      <ThreeImageShow ThreeImageShowData={ThreeImageShowData} />
      <ImageInsta heading="Season's Power 🔥" Section5_Image={Section6_Image} />
      <div className='text-center flex gap-3 flex-col'>
        <h3 className='font-bold text-[1.3rem]' >KRUTHIK EXPERIENCED</h3>
        <p className='font-[400] text-[1.1rem]'>"Since childhood, I’ve always been scared of adventure activities, but I finally decided to overcome my fear and <br /> step out of my comfort zone. What could be better than the blaze to signify change?"</p>
        <div>
          <button className='bg-black text-white px-6 py-2 rounded text-[1.2rem]'>BLAZE</button>
        </div>
      </div>
      <RoundedImage heading="" Section3_Image={Section7_Image} />
      <RoundedImage heading="The world's ultra soft Cotton T-shirt." Section3_Image={Section8_Image} />
      <ImageView image={Section9_Image} />
      <div className='text-center flex gap-4 flex-col my-5'>
        <h3 className='font-bold text-[1.3rem]'>PRITENDER EXPERIENCED</h3>
        <p className='font-[400] text-[1.1rem]'>"Overlays is the best gym bro I ever had"</p>
      </div>
      <RoundedImage heading="" Section3_Image={Section7_Image} />
      <ImageView image={Section9_Image} />
      <RoundedImage heading="RESTOCKED" Section3_Image={Section8_Image} />
      <Footer FooterData={FooterData}/>
    </div>
  )
}

export default App
