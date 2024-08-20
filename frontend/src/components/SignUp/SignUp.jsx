import React, { useState } from 'react'
import './SignUp.css'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: ""
  })
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const changeFileHandler=(e)=>{
    setInput({...input,file:e.target.files?.[0]})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(input)
    const form=new FormData();
    form.append("fullName",input.fullName);
    form.append("email",input.email);
    form.append("phone",input.phone);
    form.append("password",input.password);
    form.append("role",input.role);
    if(input.file){
      form.append("file",input.file);
    }
    console.log(form)
  }
  return (
    <div className='form-parent'>
      <form onSubmit={submitHandler} className='form'>
        <h1 className='form-title'>Sign-up</h1>
        <div className='field-div'>
          <Label className='text-weight'>Full Name</Label>
          <Input
            name="fullName"
            value={input.value}
            className='input-text'
            type="text"
            placeholder='Enter your full name'
            onChange={changeEventHandler} />
        </div>
        <div className='field-div'>
          <Label className='text-weight'>Email</Label>
          <Input
            name='email'
            value={input.email}
            className='input-text'
            type="Email"
            placeholder='Enter your Email'
            onChange={changeEventHandler} />
        </div>
        <div className='field-div'>
          <Label className='text-weight'>Phone Number</Label>
          <Input
            value={input.phone}
            name='phone'
            className='input-text'
            type="number"
            placeholder='Enter your Number'
            onChange={changeEventHandler} />
        </div>
        <div className='field-div'>
          <Label className='text-weight'>Password</Label>
          <Input
            name='password'
            className='input-text'
            value={input.password}
            type="password"
            placeholder='Enter your Password'
            onChange={changeEventHandler} />
        </div>
        <div className='radio-parent'>
          <RadioGroup>
            <div className="radio-div">
              <Input
                type='radio'
                name='role'
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler} />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="radio-div">
              <Input
                type='radio'
                name='role'
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='file-div'>
          <Label>Profile</Label>
          <Input
            type='file'
            accept='image/*' 
            onChange={changeFileHandler}/>
        </div>
        <Button className='submit-btn'>Sign-Up</Button>
        <span>Already have an Account?<Link to="/login" className='login-text'>Login</Link></span>
      </form>
    </div>
  )
}

export default SignUp;