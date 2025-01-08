import React from 'react'

const ImageInsta = ({ Section5_Image, heading }) => {
    return (
        <div>
            <div>
                <div className='text-center'>
                    <h1 className='text-[3rem] py-[1rem]'>{heading}</h1>
                </div>
            </div>
            <div className='flex flex-wrap justify-evenly w-full items-center'>
                {
                    Section5_Image.map((item) => (
                        <div key={item.id} className='w-full md:w-[18%] p-4'>
                            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                                <a href={item.link}>
                                    <img 
                                        src={item.image} 
                                        className='rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                                        alt="" 
                                    />
                                </a>
                            </div>
                            <p className="text-center  pb-2 pt-4">{item.paragraph}</p>
                            <p className='text-center '>{item.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageInsta
