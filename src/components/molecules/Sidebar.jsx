import { Link } from "react-router-dom"

export default function Sidebar() {
	return (
          <aside className="fixed w-60 inset-y-0 bg-gray-300">
            <div className='h-full flex items-center'>
              <ul className='py-2'>
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