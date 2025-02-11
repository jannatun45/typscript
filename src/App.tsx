import { routes } from "./routes"

export default function App() {
  console.log("routes => ", routes)
  return (
      <div className="flex">
        <aside className="fixed w-60 inset-y-0 flx-wrap  bg-gray-300">
          <div className="p-4 bg-gray-800">
            <a href="http://localhost:5173/">
              <h2 className="text-xl text-gray-100">Aside</h2>
            </a>
          </div>
          <div className='h-full mt-1'>
            <ul className='py-2'>
              <li className='px-3'><a href="/home">home</a></li>
              <li className='px-3'><a href="/about">about</a></li>
              <li className='px-3'><a href="/contact">contact</a></li>
            </ul>
          </div>
        </aside>
        <main className="ml-60">
          <h1>ini adalah main</h1>
        </main>
      </div>
  );
}
