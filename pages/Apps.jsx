import React from 'react'
import Ayat from '../components/Ayat'
import Collection from '../components/Collection'
import Form from '../components/Form'
import Header from '../components/Header'


const Apps = () => {
  return (
    <div className='flex flex-col md:flex-col-reverse h-fit'>
      <Collection />
      <Header  />
    
   
    </div>
  )
}

export default Apps