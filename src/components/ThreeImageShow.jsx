import React from 'react'

const ThreeImageShow = ({ ThreeImageShowData }) => {
    const data = ThreeImageShowData[0];

    return (
        <div >
            <div className='flex px-[2rem] gap-8 my-[2rem]'>
                <div className='flex-1'>
                    <img 
                        src={data.img1} 
                        className='h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                        alt="" 
                    />
                </div>

                <div className='flex flex-col gap-8 flex-1'>
                    <div className='h-[calc(50%-16px)]'>
                        <img 
                            src={data.img2} 
                            className='h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                            alt="" 
                        />
                    </div>
                    <div className='h-[calc(50%-16px)]'>
                        <img 
                            src={data.img3} 
                            className='h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                            alt="" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeImageShow
