// routes.tsx
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Team from './pages/Team';
import Layout from './components/templates/Layout';
import Product, { loader as productLoader } from './pages/Product';
import ErrorPage from './pages/ErrorPage'; // Impor halaman error

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:pid",
        element: <Product />,
        loader: productLoader,
        errorElement: <ErrorPage />, // Menambahkan errorElement untuk rute ini
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ]
      },
      {
        path: "/team/:teamId",
        element: <Team />,
      },
    ]
  },
  // Anda bisa menambahkan catch-all route untuk menangani halaman 404
  {
    path: "*",
    element: <ErrorPage />, // Halaman error untuk URL yang tidak ditemukan
  }
];
