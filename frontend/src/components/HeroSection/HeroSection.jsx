import React from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
            <span className='px-2 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No.1 Job Hunt Site</span>
            <h1 className='text-5xl font-bold'>Search,Apply&<br/>Get your Dream Jo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero, aut dicta perspiciatis sapiente excepturi autem voluptatum explicabo consectetur ratione ipsam nisi, dolor pariatur praesentium! Maiores accusamus assumenda error nostrum!</p>
            </div>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input
                 type="text"
                 placeholder='Find your job'
                 className='outline-none border-none w-full'
                 />
                <Button className='rounded-r-full bg-[#6A38C2]'>
                    <Search></Search>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection