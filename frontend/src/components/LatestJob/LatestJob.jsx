import React from 'react'
import LatestJobCards from './LatestJobCards.jsx'
const LatestJob = () => {
    const a = [1, 2, 3, 4, 5, 5, 4, 5, 5, 5,];
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#A638C2]'>Latest & Top</span>Job Opening</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    a.slice(0,6).map((item, index) => (
                        <LatestJobCards key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default LatestJob