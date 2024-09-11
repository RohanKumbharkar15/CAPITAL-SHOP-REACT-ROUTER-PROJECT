import React, { useState } from 'react';
import OrderDone from './OrderDone';

function Bill() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [add, setAdd] = useState('');
  const [phone, setPhone] = useState('');

  const [submitted, setSubmitted] = useState(false); // To check if form is submitted
  const [validData, setValidData] = useState(null); // Holds valid data to pass

  // Functions to handle input changes
  function getFname(e) {
    setFname(e.target.value);
  }

  function getLname(e) {
    setLname(e.target.value);
  }

  function getAddress(e) {
    setAdd(e.target.value);
  }

  function getPhone(e) {
    setPhone(e.target.value);
  }

  // Function to handle form submission and validation

  function getData() {
    
    if (fname && lname && add && phone){
      const data = { fname, lname, add, phone };
      setValidData(data);// Store the data for OrderDone component
      setSubmitted(true);// Mark the form as submitted
    } else {
      alert('Please fill in all the fields.');
    }
  }

  // If form is submitted, render OrderDone with the validData prop
  if (submitted) {
    return <OrderDone data={validData} />;
  }

  return (
    <>
      <section className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-8">
            <form className='border p-3 '>
              <div className="row">
                <div className="col-12">
                  <h2 className='mb-4'>Customer Information</h2>
                </div>
                <div className="col-md-6 pb-4">
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-100"
                    onChange={getFname}
                    
                  />
                </div>
                <div className="col-md-6 pb-4">
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-100"
                    onChange={getLname}
                    
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 pb-4">
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="w-100"
                    onChange={getAddress}
                   
                  />
                </div>
                <div className="col-12 pb-4">
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    className="w-100"
                    onChange={getPhone}
                    
                  />
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mb-5">
                <button
                  className="btn btn-outline-danger mt-3"
                  type="button"
                  onClick={getData}
                    >
                  Place Your Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bill;





