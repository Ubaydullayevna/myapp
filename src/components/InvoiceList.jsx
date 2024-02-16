"use client"
import React from "react";

import StateButton from "./StateButton";
import Link from "next/link";

export default function InvoicesList({invoices , status,text}) {
    console.log(invoices);
  return(
   <div className=" mt-5 text-right  ">
     <ul className="flex flex-col gap-4">
    {invoices.map((invoice) => {
     
      return(
        <li key={invoice.id} className="bg-slate-400 p-1 rounded">
        <Link href={`/aboutinvoice/${invoice.id}`}  className="flex justify-between mb-3  items-center  text-black">
        <h2 className="text-red-600"> #{invoice.id}</h2>
         <h2>Due {invoice.paymentDue} </h2>
         <h2>{invoice.clientName} </h2>
         <h2>${invoice.items[0].total.toLocaleString('en-US')}</h2>
         <StateButton status={invoice.status} text={text}/>
        </Link>  
        </li>
      )

    })}
  </ul>
   </div>
  )
}


