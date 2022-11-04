import React from 'react';
import { useForm } from 'react-hook-form';
import '../Components/style.css';
import Table from './Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [Refresh, setRefresh] = React.useState(false);
    const onSubmit = (data)=>{ 
    const addData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        hobbies: data.hobbies,
    }

        
    const url = 'http://localhost:5000/work'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(addData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((res) => res.json())
    .then((data)=>{
       
        if(data.insertedId){
            toast.success("Successfully Data Add");
            reset()
        }
        else{
            toast.error("Failed to  add product");
        }  
    });
    setRefresh(!Refresh)
    }
    return (
       
            <div className='background'>
            <div className='bg-blue-400 w-96 mx-auto h-auto p-3 rounded-lg mt-12 '>
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
                            message: 'Provide a valid Phone Number'
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
                    <input type='text' placeholder='Hobbies' className='input input-bordered w-full ' {...register("hobbies", { required: { value: true, message: " is required" },  
                    pattern: {
                            value: /[a-zA-Z][a-zA-Z ]{2,}/,
                            message: 'Provide a valid Data'
                        } })}
                    />
                       <label className="label">
                        {errors.hobbies?.type === 'required' && <span className="label-text-alt text-red-700">{errors.hobbies.message}</span>}
                        {errors.hobbies?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.hobbies.message}</span>}
                    </label>
                </div>
                <input className='btn w-full  mt-10' type="submit" value='Save' />
            </form>
        </div>
        <ToastContainer />
        <Table/>
        </div>

     
       
    );
};

export default Form;