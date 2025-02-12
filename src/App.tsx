import { routes } from "./routes"

export default function App() {
  console.log("routes => ", routes)
  return (
      <div className="flex">
        <aside className="fixed w-60 inset-y-0 bg-gray-300">
          <div className='h-full flex items-center'>
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
