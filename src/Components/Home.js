import React from 'react';
import { useForm } from 'react-hook-form';
import About from './About';
import Navbar from './Navbar';

const Home = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-gray-400 w-96 mx-auto h-auto p-3 rounded-lg mt-12'>
            <form className=' p-2 ' onSubmit={handleSubmit(onSubmit)}>
                {/* ------------------------------------Name Field ------------------------------------ */}
                <div>
                    <input type='text' placeholder='Name' className='input input-bordered w-full mt-4' {...register("name", {
                        required: { value: true, message: "Name is required" },
                        pattern: {
                            value: /[a-zA-Z][a-zA-Z ]{2,}/,
                            message: 'Provide a valid Name'
                        }
                    })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}

                    </label>
                </div>
                {/* --------------------------------------------Phone Number Field ------------------------------------ */}
                <div>
                    <input type='text' placeholder='Phone Number' className='input input-bordered w-full ' {...register("phone", { required: { value: true, message: "Phone Number is required"}, 
                    pattern: {
                            value: /[0-9]{9}/,
                            message: 'Provide a valid Name'
                        } })}
                    />
                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                        {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}

                    </label>
                </div>
                  {/* --------------------------------------------Email Field ------------------------------------ */}
                <div>
                    <input type='email' placeholder='Email' className='input input-bordered w-full ' {...register("email", {
                        required: { value: true, message: "Email is required" },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                    />

                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                    </label>
                </div>
                {/* --------------------------------------Hobbies field ----------------------------------------------- */}
                <div>
                    <input type='text' placeholder='Hobbies' className='input input-bordered w-full ' {...register("hobbies", { required: { value: true, message: " is required" } })}
                    />
                </div>
                <input className='btn w-full  mt-10' type="submit" value='Save' />
            </form>
        </div>
    );
};

export default Home;