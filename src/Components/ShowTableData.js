import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const ShowTableData = ({ work, index, refresh }) => {
    const { name, email, phone, hobbies } = work;


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
                    <button className='btn mr-1 btn-sm btn-success'>Update</button>
                </Link>
                <button disabled={!change} onClick={() => handleDelete(work._id)} className='btn btn-sm btn-error mr-4'>Delete</button>
                <ToastContainer />
            </td>
            <td className='gap-5 '>



            </td>

        </tr>
    );
};

export default ShowTableData;