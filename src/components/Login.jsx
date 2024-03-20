// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { login as authLogin } from '../store/authSlice'
// import { Button, Logo, Input } from "./index"
// import { useDispatch } from 'react-redux'
// import authService from '../appwrite/auth'
// import { useForm } from 'react-hook-form'

// function Login() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const { register, handleSubmit } = useForm()
//     const [error, setError] = useState("");

//     const login = async (data) => {
//         setError('');
//         try {
//             const session = await authService.login(data)
//             if (session) {
//                 const userData = await authService.getCurrentUser()
//                 if (userData) {
//                     dispatch(authLogin(userData))
//                 }
//                 navigate('/')
//             }
//         }
//         catch (error) {
//             setError(error.message)
//         }


//         return (
//             <div className=' flex items-center justify-center w-full' >
//                 <div className=' mx-auto w-full max-w-lg bg-gray-100 p-10 border-black/10'>
//                     <div className=' mb-2 flex justify-center '>
//                         <span className=' inline-block w-full max-w-[100px]'>
//                             <Logo width='100%' />
//                         </span>
//                     </div>
//                     <h2 className=' text-center text-2xl font-bold leading-light'>Sign in to your Account</h2>
//                     <p className=' mt-2 text-center text-base text-black/60'>
//                         Don&apos;t have any account?&nbsp;
//                         <Link to='/signup'
//                             className=' font-medium text-primary transition-all duration-200 hover:underline'>
//                             Sign Up
//                         </Link>
//                     </p>
//                     {error && <p className=' text-red-600 mt-8 text-center'>{error}</p>}
//                     <form onSubmit={handleSubmit(login)} className=' mt-8'>
//                         <div className=' space-y-5'>
//                             <Input
//                                 label="Email: "
//                                 placeholder="Enter your email"
//                                 type="email"
//                                 {...register("email", {
//                                     required: true,
//                                     validate: {
//                                         matchPattern: (value) => /^(?=.{1,64}@.{4,253}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Email address must be a valid address"
//                                     }
//                                 })}
//                             />

//                             <Input
//                                 label="Password: "
//                                 placeholder="Enter your password"
//                                 type="password"
//                                 {...register("password", {
//                                     required: true
//                                 })}
//                             />
//                             <Button
//                                 type='submit'
//                                 className=' w-full'>Sign In</Button>
//                         </div>
//                     </form>
//                 </div>
//             </div >
//         )
//     }
// }

// export default Login

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice'; // Assuming this is the correct path
import { Button, Logo, Input } from './index'; // Assuming these are imported components
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'; // Assuming this is the authentication service
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm(); // Destructure formState for errors
    const [error, setError] = useState('');

    const login = async (data) => {
        setError(''); // Clear previous errors

        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate('/');
                } else {
                    setError('Failed to retrieve user data after login.'); // Handle missing user data
                }
            } else {
                setError('Login failed. Please check your credentials.'); // Handle failed login
            }
        } catch (error) {
            setError(error.message || 'An unknown error occurred during login.'); // Handle generic errors
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto rounded-xl w-full max-w-lg bg-gray-100 p-10 border-black/10'>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-light'>Sign in to your Account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don't have any account?&nbsp;
                    <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^(?=.{1,64}@.{4,253}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                            value
                                        ) || "Email address must be a valid address",
                                },
                            })}
                            // Display validation errors inline
                            error={errors.email?.message}
                        />
                        <Input
                            label="Password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", { required: true })}
                            // Display validation errors inline
                            error={errors.password?.message}
                        />
                        <Button type='submit'
                            className=' w-full text-black bg-slate-500 rounded-full hover:bg-gray-400'
                        >Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
