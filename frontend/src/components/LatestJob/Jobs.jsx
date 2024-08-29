import React, { useEffect, useState } from 'react';
import Job from './Job';
import FilterCards from "../FilterCards/FilterCards.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/Redux/CreateSlice/UserSlice/userSlice';
import Page from "../Pagination/Page.jsx";

const Jobs = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getAllUser(page)).then((response) => {
            // console.log("hello", response);
        });
    }, [dispatch, page]);

    const handlePrevious = () => {
        if (page === 1) return;
        setPage((prevPage) => prevPage - 1);
    };

    const handleNext = () => {
        if (page === user?.Pagination?.countTotalPage) return;
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <div>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCards />
                    </div>
                    <div className='flex-1 h-[95vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-3 gap-5'>
                            {user?.getUsers?.length > 0 
                                ? user.getUsers.map((item) => <Job key={item.id} />) 
                                : <></>}
                        </div>
                    </div>
                </div>
            </div>
            <Page 
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                totalPage={user?.Pagination?.countTotalPage}
            />
        </div>
    );
};

export default Jobs;
