import { Routes, Route, Link } from 'react-router-dom' 
import { routes } from "../../routes.tsx"
import Sidebar from "../molecules/Sidebar"
import { Outlet } from "react-router";



export default function Layouts() {
	return (
		// <div className="flex">
        //   <Sidebar />
	    //   <main className="ml-[265px] flex-1 m-4 flex flex-col">
	    //     <header className="text-white p-4 bg-gray-800 rounded-t-lg">
	    //       <h1 className="text-xl">Dashboard</h1>
	    //     </header>

	    //     <section className="mt-1 px-3 py-1 flex-1 overflow-auto bg-gray-300 rounded-b-lg">
	    //       <Outlet /> {/* Ini akan render konten berdasarkan rute */}
	    //     </section>
	    //   </main>
        // </div>
			<div className="h-screen flex">
		      <Sidebar />
		      <main className="ml-[265px] flex-1 m-4 flex flex-col">
		        <header className="text-white p-4 bg-gray-800 rounded-t-lg">
		          <h1 className="text-xl">Dashboard</h1>
		        </header>

		        <section className="mt-1 px-3 py-1 flex-1 overflow-auto bg-gray-300 rounded-b-lg">
	    			<Outlet />
		        </section>
		      </main>
		    </div>
		)
}
