const Header = () => {
  return (
    <header className="bg-zinc-900 shadow-xl">
      <div className="py-3 flex md:flex-row flex-col items-center justify-around text-white">
        <h1 className="text-2xl font-bold">Cinelena</h1>
        <nav className="flex mt-2 gap-4 font-semibold">
          <a href="/" className="hover:bg-zinc-800 p-3 rounded">
            Inicio
          </a>
          <a href="/" className="hover:bg-zinc-800 p-3 rounded">
            Populares
          </a>
          <a href="/" className="hover:bg-zinc-800 p-3 rounded">
            Top rated
          </a>
          <a href="/" className="hover:bg-zinc-800 p-3 rounded">
            Em cartaz
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
