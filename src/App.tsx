  import { Routes, Route, Link } from 'react-router-dom' 
  import { routes } from "./routes"

  export default function App() {
    console.log("routes => ", routes)
    return (
        <div className="flex">
          <aside className="fixed w-60 inset-y-0 bg-gray-300">
            <div className='h-full flex items-center'>
              <ul className='py-2'>
                <li className='px-3'><Link to="/">home</Link></li>
                <li className='px-3'><Link to="/about">about</Link></li>
                <li className='px-3'><Link to="/product/1">product</Link></li>
                <li className='px-3'><Link to="/contact">contact</Link></li>
              </ul>
            </div>
          </aside>
          <main className="ml-60">
            <Routes>
              {
                routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element}>
                    {
                      route.children?.map((child, childIndex) => (
                        <Route key={childIndex} path={child.path} element={child.element}/>
                      ))
                    }
                  </Route>
                ))
              }
            </Routes>
          </main>
        </div>
    );
  }
