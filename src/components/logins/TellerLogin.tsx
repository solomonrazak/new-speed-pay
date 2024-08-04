import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from "@nextui-org/react";

import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../icons/EyeFilledIcon';

// Define the shape of your form data
interface IFormInput {
  email: string;
  password: string;
}

// Define the validation schema
const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required!'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

const TellerLogin: React.FC = () => {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Email', data.email);
    console.log('Password', data.password);
    navigate("/teller/tell-overview")
    reset();
  };

  return (
    <div className='w-screen'>
      <div className='w-full flex flex-col justify-center items-center my-auto mt-16'>
        <h1 className="text-5xl font-medium">SpeedPay</h1>
        <p className="font-medium mt-2 text-lg">Teller</p>
        <h2 className="mt-8 text-2xl font-medium">Login</h2>
        <div className="mt-3">
          <form className="flex flex-col gap-5 relative" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <Input
                {...register('email')}
                type="email"
                label="Email"
                variant="bordered"
                className="w-[300px]"
                placeholder="Enter email here"
                radius="none"
              />
              {errors.email && (
                <div className="mb-3">
                <p className="absolute text-red-600 text-sm mt-1 mb">{errors.email.message}</p>
                </div>
              )}
            </div>
            <div className="relative">
              <Input
                {...register('password')}
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                radius="none"
                type={isVisible ? "text" : "password"}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                className="max-w-xs"
              />
              {errors.password && (
                <div className="mb-3">
                <p className="absolute text-red-600 text-sm mt-1">{errors.password.message}</p>
                </div>
              )}
            </div>
            <button className="text-white bg-slate-900 py-2 rounded-md" type="submit">
              Continue
            </button>
          </form>
          <p className="text-center mt-5">
            Forgot my password
            <span className="ml-1 underline text-slate-900 font-medium cursor-pointer">reset it here</span>
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-white bg-slate-900 px-3 py-1 rounded-md">
            <Link to="/">Return to HomePage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TellerLogin;
