  import { Routes, Route, Link } from 'react-router-dom' 
  import { routes } from "../../routes.tsx"
  import Sidebar from "../molecules/Sidebar"

export default function Layouts() {
	return (
		<div className="flex">
          <Sidebar />
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
		)
}