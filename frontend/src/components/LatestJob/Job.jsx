import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from '../ui/badge'


const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>
            <div className='flex item-center gap-2 my-2'>
                <Button className='p-6' variant='outline' size="=icon">
                    <Avatar>
                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-blue-2174926871" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-left'>Title</h1>
                <p className='text-sm text-gray-500 text-left'>LorIt seems like your text might be centered due to some CSS properties, possibly f em ipsum, dolor sit amet.</p>
            </div>
            <div className='flex items-center gap-2 mt-4 justify-center'>
            <Badge className={'text-blue-700 font-bold'} variant='ghost'>12postion</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant='ghost'>Full time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant='ghost'>24Lakh</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button variant='outline' className='text-[#7209b7]'>Details</Button>
            <Button variant='outline' className='text-[#7209b7]'>Save for later</Button>
        </div>
        </div>
    )
}

export default Job