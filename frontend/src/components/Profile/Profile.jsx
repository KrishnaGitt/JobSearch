import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Button } from '../ui/button'
import { Contact, Mail } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'

const Profile = () => {
    return (
        <div>
            <div className='max-w-4xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8 shadow-xl'>
                <div className='flex items-center gap-5'>
                    <Avatar className='w-24 h-24'>
                        <AvatarImage></AvatarImage>
                    </Avatar>
                    <div className=''>
                        <h1 className='font-medium text-xl'>full name</h1>
                        <p>Lorem ipsum, dolor sit amet consectetu</p>
                    </div>
                    <Button className='text-right'></Button>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <Mail />
                        <span>Singhal.krishna</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>9897</span>
                    </div>
                </div>
                <div>
                    <h1>Skills</h1>
                    {[1, 1, 1, 1].map((item, index) => <Badge key={index} className={'text-blue-700 font-bold'} variant='outline'>{item}</Badge>)}
                </div>
                <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <Label className='font-medium font-bold'>Resume</Label>
                </div>
            </div>
        </div>

    )
}

export default Profile