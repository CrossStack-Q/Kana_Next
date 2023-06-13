import React from 'react'
import TopCard from './Hotels/TopCard'

function Hotels() {
  return (
    <div className='flex flex-col h-[92vh]'>
      <div className='flex-[0.3] bg-red-400'>
      <TopCard/>
      </div>
      <div className='flex-[0.7] flex  w-full'>
        <div className='flex-[0.5] bg-green-600'>
          okay
        </div>
        <div className='flex-[0.5] bg-amber-600'>
          else
        </div>
      </div>
    </div>
    
  )
}

export default Hotels