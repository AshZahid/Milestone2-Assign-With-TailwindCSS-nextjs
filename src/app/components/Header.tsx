"use client";
import React from 'react'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link"

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)


  const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen)

  }

    return(
        <header>
            <nav className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-12 md:h-16 lg:h-16 gap-y-8 sm:gap-y-0 sm:gap-x-8 gap-x-0">

            

                <h1 className="mb-4 sm:mb-0 text-rose-700 font-bold md:text-2xl lg:text-2xl text-center sm:text-left text-lg sm:text-xl sm:ml-10 sm:pl-4 pt-5">ABROAD</h1>
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <ul className="flex flex-col sm:flex-row space-x-0 space-y-3 sm:space:y-0 sm:space-x-3 pl-5 sm:pl-0 hidden md:flex">
                    <li className="hover:text-rose-700 pt-0 sm:pt-3"><Link href="/" >Home</Link></li>
                    <li className="hover:text-rose-700"><Link href="/services" >Services</Link></li>
                    <li className="hover:text-rose-700"><Link href="/blog" >Blog</Link></li>
                    <li className="hover:text-rose-700"><Link href="/contact" >Contact</Link></li>
                    
                </ul>
                </div>
                <button className="hover:bg-white hover:text-rose-700 w-24 mr-80 sm:mr-2 sm:mr-3 sm:w-auto bg-rose-700 px-7 py-3 rounded sm:mt-2 hidden md:flex">Sign In</button>
           

           <div>
           <div className='d:hidden' onClick={toggleMenu}>
             {isMenuOpen? <AiOutlineClose size={30} /> :
             <AiOutlineMenu size={30} />
             }
            </div>
         </div>

              {isMenuOpen && (
                <ul className='flex flex-col gap-4 mt-4 d:hidden'>
                  
                  <li className='hover:text-rose-700'>
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                  </li>
                  <li className='hover:text-rose-700'>
                    <Link href="/services" onClick={toggleMenu}>Serveces</Link>
                  </li>
                  <li className='hover:text-rose-700'>
                    <Link href="bolg" onClick={toggleMenu}>Blog</Link>
                  </li>
                  
                     <button className="hover:bg-white hover:text-rose-700 w-24 mr-80 sm:mr-2 sm:mr-3 sm:w-auto bg-rose-700 px-7 py-3 rounded sm:mt-2" onClick={toggleMenu}>Sign In</button>
                </ul>
                
              )}
      
    
           


                 
                 






            </nav>
         
        </header>
    )
}