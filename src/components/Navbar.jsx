import React from "react";

function Navbar() {
  return <div className="max-w-4xl mx-auto  mt-10 navbar bg-base-100">
    
  <div className="flex-1 ">
   <div> 
    <a className="text-3xl text-stone-50 ">Invoices</a>
    <p>There are 7 total invoices</p></div>
  </div>
 <div className="flex justify-between gap-5">
  <div>
  <select className="select select-info w-full max-w-xs">
  <option disabled selected>Filter by status</option>
  <option>Paid</option>
  <option>Pending</option>
  <option>Draft</option>
</select>
  </div>
  <div>
    <button className="btn btn-accent after:first:">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  New Invoice
</button></div>
 </div>
</div>
}

export default Navbar;
