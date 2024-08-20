import React from 'react'
import './SignUp.css'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup} from "@/components/ui/radio-group";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='form-parent'>
      <form action="" className='form'>
        <h1 className='form-title'>Sign-up</h1>
        <div className='field-div'>
          <Label className='text-weight'>Full Name</Label>
          <Input
          className='input-text'
            type="text"
            placeholder='Enter your full name' />
        </div>
        <div className='field-div'>
          <Label className='text-weight'>Email</Label>
          <Input
          className='input-text'
            type="Email"
            placeholder='Enter your Email' />
        </div>
        <div className='field-div'>
          <Label className='text-weight'>Phone Number</Label>
          <Input
          className='input-text'
            type="number"
            placeholder='Enter your Number' />
        </div>
        <div className='field-div'>
          <Label className='text-weight'>Password</Label>
          <Input
          className='input-text'
            type="password"
            placeholder='Enter your Password' />
        </div>
        <div className='radio-parent'>
          <RadioGroup>
            <div className="radio-div">
              <Input
              type='radio'
              name='role'
              value="student"/>
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="radio-div">
            <Input
              type='radio'
              name='role'
              value="recruiter"/>
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='file-div'>
          <Label>Profile</Label>
          <Input
          type='file'
          accept='image/*'/>
        </div>
        <Button className='submit-btn'>Sign-Up</Button>
        <span>Already have an Account?<Link to="/login" className='login-text'>Login</Link></span>
      </form>
    </div>
  )
}

export default SignUp;