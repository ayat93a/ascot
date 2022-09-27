import React from 'react'
import Form from './Form'
import Gallary from './Gallary'
import Header from './Header'
import Hero from './Hero'

const Collection = () => {
  return (
    <>
    <div className='grid justify-center md:gap-6 md:flex md:pl-44 grid-col-1'>
        <Gallary />
        <Hero />
        <Form />
    </div>
    </>
  )
}

export default Collection