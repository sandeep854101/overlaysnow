import React from 'react'

const RoundedImage = ({ heading, Section3_Image }) => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[3rem] py-[1rem]'>{heading}</h1>
            </div>
            <div className='flex justify-evenly items-center'>
                {
                    Section3_Image.map((item) => (
                        <div key={item.id}>
                            <a href={item.link}>
                            <img 
                                        src={item.image} 
                                        className='rounded-lg transform ' 
                                        alt="" 
                                    />
                            </a>
                            <p className="py-2">{item.paragraph}</p>

                            <p className='text-center'>{item.price}</p>
                            <div className='flex gap-2 justify-center items-center py-5'>
                                {
                                    item.size.map((size, index) => (
                                        <div key={index}>
                                            <button className='border border-gray-500 px-3 py-1'>
                                                <a href={size.url}>
                                                    <p>{size.label}</p>
                                                </a>
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RoundedImage
