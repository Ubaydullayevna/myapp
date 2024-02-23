import React from "reactA";

function Navbar() {
  return <div className="max-w-4xl mx-auto  mt-10 navbar bg-base-100">
    
  <div className="flex-1 ">
   <div> 
    <a className="text-3xl text-stone-50 ">Invoices</a>
    <p>There are 7 total invoices</p></div>
  </div>
 <div className="flex justify-between gap-5">
  <div className="dropdown">
    
  <div tabIndex={0} className="m-1 font-bold " role="button">
    Filtered by Status
  </div>
    
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-shadow bg-base-100 rounded-box  w-52  ">
    <li>
      <label className="label cursor-pointer flex justify-start"   >
        <input type="checkbox"
         name="checked"
         className="checkbox checkbox-primary" />
         <span>Draft</span>
      </label>
    </li>
    <li>
      <label className="label cursor-pointer flex justify-start"  >
        <input type="checkbox"
         name="checked"
         className="checkbox checkbox-primary" />
         <span>Pending </span>
      </label>
    </li>
    <li>
      <label className="label cursor-pointer flex justify-start" >
        <input type="checkbox"
         name="checked"
         className="checkbox checkbox-primary" />
         <span>Paid </span>
      </label>
    </li>
  </ul>
  
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
