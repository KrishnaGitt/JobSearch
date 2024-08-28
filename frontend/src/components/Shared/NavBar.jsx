import React from 'react'
import { Link } from 'react-router-dom'
import { Popover } from '../ui/popover'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import './NavBar.css'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'

const NavBar = () => {
    const user=false;
    return (
        <>
            <div className='parent-div'>
                <div className='nav-bar'>
                    <div>
                        <h1 className='job-title'>Job<span className='job-title-span'>Portal</span></h1>
                    </div>
                    <div className='parent-list'>
                        <ul className='list'>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/jobs"><li>Jobs</li></Link>
                            <Link to="/browse"><li>Browse</li></Link>
                        </ul>
                        {!user?(
                            <div className='login-sign-btn'>
                               <Link to="/login"><Button className='logout-btn'>Login</Button></Link> 
                               <Link to="/signup"><Button className='logout-btn'>Sign-Up</Button></Link> 
                            </div>
                        ):( <Popover>
                            <PopoverTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className='popover-content'>
                                <div className='parent-popover'>
                                        <h4>Krishna singhal</h4>
                                        <h4>Software Engineer</h4>
                                </div>
                                <div className='parent-button'>
                                    <div className='button-text'>
                                        <User2/>
                                        <Button variant='link' >login</Button>
                                    </div>
                                    <div className='button-text'>
                                        <LogOut/>
                                        <Button variant='link'>Logout</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>)}
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar