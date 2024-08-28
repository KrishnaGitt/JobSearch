import React from 'react'
import Job from './Job'
import FilterCards from "../FilterCards/FilterCards.jsx"
const Jobs = () => {
    const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div>
            <div>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCards />
                    </div>
                    <div className='flex-1 h-[95vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jobsArray.map((item, index) => <Job key={index} />)
                            }
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Jobs