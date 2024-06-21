import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-zinc-900 shadow-xl">
      <div className="py-3 flex md:flex-row flex-col items-center justify-around text-white">
        <h1 className="shrikhand text-2xl">
          Cine<span className="text-green-500 shrikhand">Lena 📽️</span>
        </h1>
        <nav className="flex mt-2 gap-4 font-semibold">
          <Link className="hover:bg-zinc-800 p-3 rounded" to={"/"}>
            Inicio
          </Link>
          <Link className="hover:bg-zinc-800 p-3 rounded" to={"/mostpopular"}>
            Populares
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
