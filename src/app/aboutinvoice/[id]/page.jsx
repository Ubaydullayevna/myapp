import React from "react";

function SingleInvoice({params}) {
  return(
    <div className="max-w-4xl mx-auto">
       <div className=" mt-6 bg-neutral-900 p-3 rounded"> 
   <div className="flex justify-between  gap-4 ">
   <div className="flex gap-3 items-center">
      <p>status</p>
      <button className="btn rounded-box">{params.status} Pending</button>
    </div>
    <div className="flex gap-4">
      <button className="btn rounded-box">Edit</button>
      <button className="btn btn-error rounded-box">Delete</button>
      <button className="btn btn-accent rounded-box">Mark as paid</button>
    </div>
   </div>

  </div>
  <div>
    <div className="flex justify-between items-center pt-3">
     <span>
     <h4>{params.id}</h4>
     <p>{params.description}Graphic Design</p>
     </span>     <span>
     <p>{params.country} United kingdom </p>
     <p>{params.city}  London</p>
     <p>{params.postCode} CA20 2TG</p>
     </span>
      
    </div>
    <div className="flex justify-between py-10">
      <span>
         <h4 className="text-gray-200">
        Invoice Date {params.createdAt}</h4> 
        </span>
      <span>
        <h4>Bill to</h4>
        <h3>Alex Grim</h3>
      </span>
      <span> <h4>sent to</h4> <h3>alexgrim@mail.com</h3></span>
    </div>
    <div className="flex justify-between">
      <span>
        <p>Payment Due</p>
        <h3>20 Sep 2021 </h3>
        </span>
        <span>
          <p>84 Church Way</p>
          <p>Bradford</p>
          <p>BD1 9PB</p>
          <p>United Kingdom</p>
        </span>
    </div>
    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>item  Name</th>
        <th>QTY</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Banner Design</td>
        <td>1</td>
        <td>£ 156.00</td>
        <td>£ 156.00</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Email design</td>
        <td>7</td>
        <td>£ 200.00</td>
        <td>£ 200.00</td>
      </tr>
      
     
    </tbody>
  </table>
</div>

    </div>
    <footer className="footer p-10 bg-neutral text-neutral-content rounded">
      <h1 className="text-3xl">Amount Due</h1>
      <h1 className="text-4xl">£ 556.00</h1>
</footer>
  </div>
    </div>
  )
}

export default SingleInvoice;
