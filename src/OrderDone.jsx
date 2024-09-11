

import React from 'react';
import { Link } from 'react-router-dom';
function OrderDone(props) {
    let data=props.data;
  return (
    <>
        <section className="s1 container-fluid">
        <div className="row pt-5 pb-5 text-center">
          <div className="col-12">
            <h1 className="fst-italic">Order Details</h1>
          </div>
          <div className="col-12">
            <p className="m-0">
              <Link to={"/"} className="text-danger pe-2 ">
                Home
              </Link>{" "}
              |{" "}
              <Link to={"/shop"} className="text-danger  ps-2">
                Product Details
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-8">
            <h2 className='fst-italic text-danger mb-4 text-center border-bottom border-3 pb-2'>Your Order Is Placed</h2>

          <h4
          >Order Summary :</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Field</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{data.fname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{data.lname}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{data.add}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>The Rage of Dragons</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>$50.00</td>
              </tr>
              <tr>
                <td>Payment Method</td>
                <td>Cash on Delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
   
  );
}

export default OrderDone;








// import React, { useState } from "react";
// import Bill from "./Bill";

// function OrderDone()
// {
//     // const existingData=[{'fname':'','lname':'','add':'','phone':''}];
//     const[data,setData]=useState([]);

//     function myData(a,b,c,d)
//     {
//         setData(a,b,c,d);
//         // setData(existingData=>[...existingData,{'fname':a,'lname':b,'add':c,'phone':d}]);
//     }
//     return (
//         <>
//             <Bill user={myData}></Bill>
//             <table>
//                 <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Address</th>
//                     <th>Phone</th>
//                 </tr>
//                 {
//                     data.map((x)=>{
//                         return(
//                             <tr>
//                                 <td>{x.a}</td>
//                                 <td>{x.b}</td>
//                                 <td>{x.c}</td>
//                                 <td>{x.d}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </table>
//         </>
//     )
// }
// export default OrderDone;