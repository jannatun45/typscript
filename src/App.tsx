  import { Routes, Route, Link } from 'react-router-dom' 
  import { routes } from "./routes"
  import Sidebar from "./components/molecules/Sidebar"
  import Layout from "./components/templates/Layout"

  export default function App() {
    console.log("routes => ", routes)
    return (
        <div>
          <Layout />
        </div>
    );
  }
