import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {id} = useParams();
    const navigate = useNavigate()
    const onSubmit = (data) =>{
        const url = ` http://localhost:5000/work/${id}`
        console.log(url)
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            // if(data.Update){
            //     toast.success('Update Successfully!!!')

            // }
            toast.success('Update Successfully!!!')
            navigate('/showTableData')
        })

    }
    return (
        <div className='mt-8'> 
           <h1 className='text-center text-3xl font-bold text-gray-600'>Update Data</h1>
            <div className='mx-auto w-96 h-auto bg-gray-400 mt-8 p-3 rounded-lg'>
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
               <div className='flex'>
             <Link to ='/showTableData'>   </Link> 
              <input className='btn   mt-7' type="submit" value='Update' /> 
            
               <Link to='/showTableData'><button className='btn ml-6 mt-7'>Back</button></Link>
               </div>
            </form>
        </div>
        </div>
    );
};

export default Update;