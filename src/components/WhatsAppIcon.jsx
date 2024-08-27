import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

const WhatsAppIcon = () => {
  return (
    <div className='bg-green-500 h-[60px] w-[60px] rounded-full fixed right-8 bottom-8 flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out'>
      <ImWhatsapp className='text-white text-[30px]' />
    </div>
  );
}

export default WhatsAppIcon;
