// components/RouterView.jsx
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes'; // ambil routes dari file routes.js

function RouterView() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children?.map((child, childIndex) => (
            <Route key={childIndex} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default RouterView;
