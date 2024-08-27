import React, { useState } from 'react'
import './Login.css'
import { Label } from '../ui/label.tsx';
import { Input } from '../ui/input.tsx';
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { Button } from '../ui/button.tsx';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import { userRegistorApi } from "../../Api/User/userApi.js"
import axios from 'axios';
// import {USER_TEST} from ""

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate()
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const submitHandler =  (e) => {
    e.preventDefault();
    console.log(input)
    const form = new FormData();
    form.append("email", input.email);
    form.append("password", input.password);
    form.append("role", input.role);
    console.log(form)
    try {
      const res =  userRegistorApi(form);
      if (res.data.sucess) {
        navigate("/login")
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }
  const testapi=async()=>{
      const res=await axios.post("http://localhost:5000/api/v1/test",{});
      console.log(res);
  }
  return (
    <>
      <button onClick={testapi} className='bg-red-500'>Hello</button>
      <div className='form-parent'>
        <form onSubmit={submitHandler} className='form'>
          <h1 className='form-title'>Sign-up</h1>
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
          <Button className='submit-btn'>Login</Button>
        </form>
      </div>
    </>

  )
}

export default Login;