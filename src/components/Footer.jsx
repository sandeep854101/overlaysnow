import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = ({ FooterData }) => {
  const aboutData = FooterData[0];
  const policiesData = FooterData[1];

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">{aboutData.title}</h2>
          <ul>
            {aboutData.items.map((item, index) => (
              <li key={index} className="mb-2">
                <a href={item.url} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">{policiesData.title}</h2>
          <ul>
            {policiesData.items.map((item, index) => (
              <li key={index} className="mb-2">
                <a href={item.url} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Newsletter</h2>
          <p className="text-gray-700 mb-4">
            You can be the first one to know about our new releases, latest offers and more. 
            <a href="#" className="text-blue-500 hover:text-blue-700"> Sign up now!</a>
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-2 border border-gray-300 rounded-l"
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-r"
            >
              →
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <p className="text-gray-700 mb-4">Stay in touch!</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaFacebookF className='text-[1.7rem] text-black'/>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaTwitter  className='text-[1.7rem] text-black'/>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaInstagram className='text-[1.7rem] text-black'/>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaYoutube className='text-[1.7rem] text-black'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
