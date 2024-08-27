import React from 'react'

const CircleView = ({ CircleImageData }) => {
  return (
    <div>
      <div className='flex justify-between px-[1.4rem] items-center py-[2rem]'>
        {
          CircleImageData.map((item) => (
            <div key={item.id} >
              <div className='text-center flex flex-col gap-2' >
                <a href={item.link}>
                  <div >
                    <img src={item.image} alt={item.title} className='h-[7.2rem] w-[7.2rem] rounded-full' />
                  </div>
                </a>
                <p className='text-[1.1rem] uppercase'>{item.title}</p>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CircleView
