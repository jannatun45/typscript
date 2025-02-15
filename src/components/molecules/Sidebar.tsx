import { Link } from "react-router-dom"

export default function Sidebar() {
	return (
          <aside className="fixed w-60 ml-4 my-4 z-10 inset-y-0 flex-wrap items-center justify-between overflow-hidden rounded-lg border-0 p-0 antialiased shadow-none">
            <div className="p-4 bg-gray-800">
              <a href="#" className="block text-end whitespace-nowrap text-slate-700">
                <h2 className="font-semibold text-xl text-gray-100">React Vite</h2>
              </a>
            </div>
            <div className='h-full mt-1 bg-gray-300'>
              <ul className='rounded py-2"'>
                <li className='px-3'><Link to="/">home</Link></li>
                <li className='px-3'><Link to="/about">about</Link></li>
                <li className='px-3'><Link to="/dashboard">dashboard</Link></li>
                <li className='px-3'><Link to="/product/1">product</Link></li>
                <li className='px-3'><Link to="/contact">contact</Link></li>
              </ul>
            </div>
          </aside>
		)
}