import React from 'react'
import v1 from '../assests/v1.png'
import v2 from '../assests/v2.png'
import v3 from '../assests/v3.png'
import v4 from '../assests/v4.png'
import Image from 'next/image'

const Gallary = () => {
  return (
    <div className='relative md:gap-4 md:grid-cols-1 md:grid carousel slide'>
        <Image src={v4} className=' object-fit' height='80' />
        <Image src={v2} className=' object-fit' height='80' />
        <Image src={v4} className=' object-fit' height='80' />
        <Image src={v1} className=' object-fit' height='80' />
        <Image src={v2} className=' object-fit' height='80' />
        <Image src={v3} className=' object-fit' height='80' />
        <Image src={v1} className=' object-fit' height='80' />
    </div>
  )
}

export default Gallary