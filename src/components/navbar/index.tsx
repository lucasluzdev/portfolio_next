"use client"
import socialMedia from '@/constants/social-media';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface MenuItemsProps {
  menuItems: Array<{
    id: number;
    title: string;
    path: string;
  }>
};

const Navbar: React.FC<MenuItemsProps> = ({ menuItems }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#730C22] text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex justify-center items-center'>
          <figure className='mr-5 h-[40px] w-[40px] rounded-full bg-white'>
            <img src='/assets/img/profile.png' alt="Profile photo" className='w-[100%] h-[100%] rounded-full' />
          </figure>
          <a href='#' className='font-bold text-xl'>LUCAS LUZ</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center space-x-4">

          {menuItems.map(({ id, title, path }) => (
            <a key={id} href={path} className="hover:text-[#ceab5d] font-bold">{title}</a>
          ))}
          <Link key={socialMedia[0].id} href={socialMedia[0].url} target='_blank' className='flex flex-col justify-between align-items-center items-center content-center hover:bg-[#ceab5d]'>
            <img src='/assets/img/social/linkedinwhite.png' alt="Rede social" width={30} height={30} />
          </Link>
          <Link key={socialMedia[1].id} href={socialMedia[1].url} target='_blank' className='flex flex-col justify-between align-items-center items-center content-center hover:bg-[#ceab5d] hover:rounded-full'>
            <img src='/assets/img/social/githubwhite.png' alt="Rede social" width={30} height={30} />
          </Link>

        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden text-center">
          {menuItems.map(({ id, title, path }) => (
            <a key={id} href={path} className="block py-2 hover:bg-[#ceab5d] font-bold">{title}</a>
          ))}
          <Link key={socialMedia[0].id} href={socialMedia[0].url} target='_blank' className='flex flex-col justify-between align-items-center items-center content-center my-5'>
            <img src='/assets/img/social/linkedinwhite.png' alt="Rede social" width={30} height={30} />
          </Link>
          <Link key={socialMedia[1].id} href={socialMedia[1].url} target='_blank' className='flex flex-col justify-between align-items-center items-center content-center my-5'>
            <img src='/assets/img/social/githubwhite.png' alt="Rede social" width={30} height={30} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;