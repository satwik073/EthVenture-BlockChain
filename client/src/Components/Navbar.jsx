import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address = '0xabc';

  return (
    <div className="flex flex-col sm:flex-row w-full mb-4 mx-6 mt-4">
      <div className="hidden sm:flex flex-row py-2 pl-4 pr-2 h-[52px] rounded-3xl bg-[#1c1c24] mb-4 sm:mb-0 sm:mr-4 sm:w-auto ">
        <input
          type="text"
          placeholder="Search For Campaigns"
          className="flex w-full font-normal text-white bg-transparent outline-none justify-between text-[14px] placeholder:text-[#4b5264]"
        />
        <div className="w-[72px] h-full bg-[#4acd8d] rounded-3xl flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
        </div>
      </div>

      <div className=" sm:flex hidden flex-col sm:flex-row gap-5 sm:ml-auto">
        <CustomButton
          btnType="button"
          title={address ? 'Create a Campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if (address) navigate('create-campaign');
            else 'connect()';
          }}
          className="mb-4 sm:mb-0"
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32]  justify-center hidden sm:flex items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      <div className="sm:hidden mt-4 flex justify-between items-center relative">
        <div className="w-[40px]  h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>
       
        <img
          src={menu}
          alt="menu"
          className="w-[24px] h-[24px] mx-6 object-contain cursor-pointer"
          onClick={() => setToggleDrawer(!toggleDrawer)}
        />
        <div className={`absolute bg-[#1c1c24] z-50 top-[90px] shadow-secondary py-4 right-0 left-0 rounded-3xl ${toggleDrawer ? 'translate-y-0' : '-translate-y-[100vh]'} transition-all duration-700 w-[90%]`}>
          <ul className="mb-4 px-6 rounded-3xl">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 rounded-3xl ${isActive === link.name && 'bg-[#3a3a43]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img src={link.imgUrl} alt={link.name} className={`w-[16px] h-[16px] flex items-center mt-1 object-contain gap-6 ${isActive ===link.name? 'grayscale-0' : 'grayscale'}`} />
                <p className={`gap-6  flex items-center px-8 ${isActive === link.name?'text-[#1dc071]':'text-[#808191]'}`}>{link.name}</p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4">
          <div className='text-white'>
          <CustomButton
            btnType="button"
            title={address ? 'Create a Campaign' : 'Connect'}
            styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
            handleClick={() => {
              if (address) navigate('create-campaign');
              else 'connect()';
            }}
            className="mb-4 sm:mb-0"
          />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
