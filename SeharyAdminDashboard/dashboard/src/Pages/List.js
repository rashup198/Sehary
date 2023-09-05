import React from 'react';


const List = ({ employees, handleEdit, handleDelete }) => {
  return (
    <div className='contain-table'>
      <table className='striped-table'>
        <thead>
          <tr>
            <th>Emp No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Data of joing</th>
            <th colSpan={2} className='text-center'>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>₹ {employee.salary}</td>
                <td>{employee.date}</td>
                <td>
                  <button onClick={()=>handleEdit(employee.id)} >Edit</button>
                </td>
                <td>
                <button onClick={()=>handleDelete(employee.id)} >Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
