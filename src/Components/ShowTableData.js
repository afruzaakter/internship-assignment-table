import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const ShowTableData = ({ work, index, refresh }) => {
    const { name, email, phone, hobbies } = work;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = 'http://localhost:5000/work'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((res) => res.json())
            .then((data) => {

                if (data.insertedId) {
                    toast.success("Successfully Data Add");
                    reset()


                }
                else {
                    toast.error("Failed to  add product");
                }
            });
    }

    const [change, setChang] = useState(false)
    function buttonHandler() {
        setChang(!change)
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = ` http://localhost:5000/work/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refresh()
                    toast.success('Successfully Delete Data')

                })
        }
    }

    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" onChange={buttonHandler} className="checkbox" />
                </label>
            </th>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{hobbies}</td>

            <td>
                <Link className='' to={`/update/${work._id}`}>
                    <button className='btn mr-1 btn-sm btn-secondary'>Update</button>
                </Link>
                <button disabled={!change} onClick={() => handleDelete(work._id)} className='btn btn-sm btn-error mr-4'>Delete</button>
                <ToastContainer />
            </td>
            <td className='gap-5 '>

                <label for="modal" class="btn btn-sm mr-3 btn-secondary">Add </label>
                <input type="checkbox" id="modal" class="modal-toggle" />

{/* -----------------------Modal form start ------------------------------------ */}

                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
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
                                    <input type='text' placeholder='Phone Number' className='input input-bordered w-full ' {...register("phone", {
                                        required: { value: true, message: "Phone Number is required" },
                                        pattern: {
                                            value: /[0-9]{9}/,
                                            message: 'Provide a valid Phone Number'
                                        }
                                    })}
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
                                    <input type='text' placeholder='Hobbies' className='input input-bordered w-full ' {...register("hobbies", {
                                        required: { value: true, message: " is required" },
                                        pattern: {
                                            value: /[a-zA-Z][a-zA-Z ]{2,}/,
                                            message: 'Provide a valid Data'
                                        }
                                    })}
                                    />
                                    <label className="label">
                                        {errors.hobbies?.type === 'required' && <span className="label-text-alt text-red-700">{errors.hobbies.message}</span>}
                                        {errors.hobbies?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.hobbies.message}</span>}
                                    </label>
                                </div>
                                <input className='btn w-full  mt-10' type="submit" value='Save' />
                            </form>
                        </div>
                        <div class="modal-action">
                            <label for="modal" class="btn">Yay!</label>
                        </div>
                    </div>
                </div>

                {/* -----------------------Modal form end ------------------------------------ */}

                <button onClick={() => handleDelete(work._id)} className='btn btn-sm  mr-4'>Send</button>
                <ToastContainer />


            </td>

        </tr>
    );
};

export default ShowTableData;