import React from 'react';
import { locatioData } from '../Data/LocationData';
import Swal from 'sweetalert2';
import '../../index.css';
import { useState } from 'react';
import List from './List';
import Header from './Header';
import Edit from './Edit';
import Add from './Add';

const Dashboard = () => {
  const [Locations, setLocations] = useState(locatioData);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    console.log("the id is", id);
    const [location] = locatioData.filter((location) => location.id === id);
    setSelectedLocation(locatioData);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    console.log("the delete id is", id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this employee!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        const updatedLocation = Locations.filter((locatioData) => employee.id !== id);

        Swal.fire({
          icon: 'success',
          title: 'Employee Deleted Successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        setLocations(updatedEmployees);
      }
    });
  };

  return (
    <div className=''>
      <div className=''>
        {/* list of Locations */}
        {!isAdding && !isEditing && (
          <div className='container mx-auto px-4'>
            {/* Apply responsive classes to Header component */}
            <Header setIsAdding={setIsAdding}></Header>

            <List
              Locations={Locations}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            ></List>
          </div>
        )}

        {/* add Location */}
        {isAdding && (
          <div className='container mx-auto px-4'>
            <Add
              Locations={Locations}
              setEmployees={setEmployees}
              setIsAdding={setIsAdding}
            ></Add>
          </div>
        )}

        {/* edit Location */}
        {isEditing && (
          <div className='container mx-auto px-4'>
            <Edit
              setIsEditing={setIsEditing}
              selectedLocation={selectedLocation}
              Locations={Locations}
              setLocations={setLocations}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
