import React, { useEffect,useState } from 'react';
import ShowTableData from './ShowTableData';


const Table = () => {
    const [works, setWorks] = useState([]);
    const [refresh, setRefresh] = React.useState(false);
    useEffect(() =>{
        fetch('http://localhost:5000/work')
        .then(res => res.json())
        .then(data => setWorks(data));
        setRefresh(!refresh)
       
    }, [])

   
 
    return (
        <div className="overflow-x-auto mt-20 mb-20">
        <table className="table w-full">
            <thead>
                <tr>
                
                    <th>Select</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Hobbies</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
              works.map((work, index) =><ShowTableData
              key= {work._id}
              work = {work}
              index = {index}
              Refresh = {refresh}
              />)  
            }
            </tbody>
        </table>
    </div>
    );
};

export default Table;