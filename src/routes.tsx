import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Team from './pages/Team';

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "settings",
                element: <Settings />
            },
            
        ]
    },
    {
        path: "/team/:teamId",
        element: <Team />,
    },
]
