import React, { useEffect, useState } from 'react'
import Job from './Job'
import FilterCards from "../FilterCards/FilterCards.jsx"
import { useDispatch } from 'react-redux';
import { getAllUser } from '@/Redux/CreateSlice/UserSlice/userSlice';
const Jobs = () => {
    const dispatch=useDispatch();
    const [page,setPage]=useState(1);
    const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
    
    useEffect(()=>{
        dispatch(getAllUser()).then((response)=>{
            console.log("hello",response);
        })
    },[page]);

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