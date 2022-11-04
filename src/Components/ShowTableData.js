import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const ShowTableData = ({ work, index }) => {
    const {name, email, phone, hobbies} = work;
    const [Refresh, setRefresh] = React.useState(false);

    const [change, setChang] = useState(false)
    function buttonHandler() {
        setChang(!change)
    }

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed) {
            const url = ` http://localhost:5000/work/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully Delete Data')
                setRefresh(!Refresh)
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
            <td className='gap-5 '>

                <button className='btn btn-sm btn-primary ml-5'>Update</button>
           
            </td>
            <td>

            <button onClick={() => handleDelete(work._id)} className='btn btn-sm btn-error mr-4'>Delete</button>
            <ToastContainer />
            </td>
            
        </tr>
    );
};

export default ShowTableData;