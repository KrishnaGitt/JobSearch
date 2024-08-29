import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const Page = ({ handlePrevious, handleNext, totalPage ,setPage}) => {
    const pagesArray = Array(totalPage).fill(null);
    console.log(pagesArray,"999",totalPage)
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={handlePrevious} />
                    </PaginationItem>
                    {pagesArray.map((item, index) => (
                        <PaginationItem key={index}> {/* Moved key prop here */}
                            <PaginationLink>{index + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext onClick={handleNext} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default Page;
