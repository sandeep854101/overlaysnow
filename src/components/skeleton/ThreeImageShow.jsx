import React from 'react'

const ThreeImageShow = ({ ThreeImageShowData, heading }) => {
    const data = ThreeImageShowData[0];

    return (
        <div className='py-[2rem]' >

            <div className="text-center pb-5">
                <h1 className="text-[2.5rem]">{heading}</h1>
            </div>
            <div className='flex px-[2rem] gap-8 '>
                <div className='flex-1'>
                    <img
                        src={data.img1}
                        className='h-full w-full object-cover rounded-lg cursor-pointer '
                        alt=""
                    />
                </div>

                <div className='flex flex-col gap-8 flex-1'>
                    <div className='h-[calc(50%-16px)]'>
                        <img
                            src={data.img2}
                            className='h-full w-full object-cover rounded-lg cursor-pointer '
                            alt=""
                        />
                    </div>
                    <div className='h-[calc(50%-16px)]'>
                        <img
                            src={data.img3}
                            className='h-full w-full object-cover rounded-lg cursor-pointer '
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeImageShow
