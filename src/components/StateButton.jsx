"use client"

import { useEffect, useState } from "react";

function StateButton({status}) {   
    const [color,setColor] = useState('')
    useEffect(()=>{
        
    switch (status) {
        case 'paid':
           setColor('bg-emerald-300')
           break;
        case 'pending':
            setColor('bg-emerald-300')
            break;
        default:
           setColor(' ')
    }

    },[status])
 if (status) {
  return <button className={`capitalize btn ${status == 'paid' ? 'bg-emerald-100' : '' } , ${status == 'draft' ? 'bg-cyan-300 text-black' : '' }`} >{status} </button>
  
 }
 
}

export default StateButton;
