import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
            <div className='flex items-center justify-between'>
                <p>2 days ago</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>
            <div className='flex item-center gap-2 my-2'>
                <Button className='p-6' variant='outline' size="=icon">
                    <Avatar>
                        <AvatarImage src="https://www.freepik.com/free-vector/gradient-logo_4388298.htm#query=company%20logo&position=4&from_view=keyword&track=ais_hybrid&uuid=818b5327-0b6e-4226-b62a-065e3413ac73" />
                    </Avatar>
                </Button>
                <div>
                    <h1>Company Name</h1>
                    <p>India</p>
                </div>
            </div>
        </div>
    )
}

export default Job