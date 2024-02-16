import { Navbar, StateButton } from "@/components";
import InvoicesList from "@/components/InvoiceList";
 

async function getData(url) {
  const req = await fetch(url , {
    next:{
      revalidate:60
    }
  })

  const data = await req.json()

  return data
  
}

async function Home() {
  const invoices = await  getData('http://localhost:4000/data') 
  console.log(invoices);
  return <main className="max-w-4xl mx-auto">
    <StateButton/>
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
    <InvoicesList invoices={invoices}/>
  </main> 
}

export default Home;
