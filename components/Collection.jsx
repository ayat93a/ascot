import React from 'react'
import Form from './Form'
import Gallary from './Gallary'
import Hero from './Hero'

const Collection = () => {
  return (
    <div className='flex flex-1 gap-6 pl-44'>
        <Gallary />
        <Hero />
        <Form  className='flex-1'/>
    </div>
  )
}

export default Collection