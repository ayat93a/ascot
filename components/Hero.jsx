import React from 'react'
import Image from 'next/image'
import hero from '../assests/Hero.png'
import {AiFillHeart} from 'react-icons/ai'
import {HiShare} from 'react-icons/hi'

const Hero = () => {
  return (
    
    <div className='h-96'>
      
        <div className='relative -mt-44 md:mt-0'>
            <Image src={hero} className='object-fit ' height='655' />
                <h3 className="absolute p-1 text-xs font-semibold text-white bg-green-500 rounded-md md:py-2 top-5 md:left-5 left-10">Tender For Sale</h3>
                <HiShare className="absolute flex p-1 py-1 text-xs text-white bg-gray-400 rounded-full white text-font-semibold top-5 right-14" size={26}/>
                <AiFillHeart className="absolute p-1 py-1 text-xs text-white bg-gray-400 rounded-full white text-font-semibold top-5 right-5" size={26}/>    
                          
        </div>
        
    </div>
  )
}

export default Hero