import React from 'react'

const ImageView = ({ image }) => {
    return (
        <>
            <div>
                {
                    image.map((item) => (
                        <div key={item.id} className=' relative h-full w-full'>
                            <a href={item.link}>
                                <img src={item.image} alt="" />
                            </a>

                            <div className='inset-0 absolute bg-[#00000021]'>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default ImageView
