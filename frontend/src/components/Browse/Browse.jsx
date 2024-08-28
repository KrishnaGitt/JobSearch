import React from 'react'
import Job from '../LatestJob/Job';
const Browse = () => {
  const random = [1, 2, 3, 4, 5, 6, 7, 6, 6];
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <h1 className='text-left'>Search Result{(random.length)}</h1>
      <div className='flex items-center'>
        <div className='grid grid-cols-3 gap-5 my-10'>
          {random.map((item, index) => (<Job key={index}/>))}
        </div>

      </div>
    </div>

  )
};

export default Browse