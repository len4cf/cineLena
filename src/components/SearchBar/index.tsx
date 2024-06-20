const SearchBar = () => {
  return (
    <div className="text-center pt-14">
      <input
        type="text"
        placeholder="Pesquise por um filme..."
        className="md:w-[600px] w-[200px] px-3 py-2 rounded bg-zinc-500 placeholder:text-white text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 transition duration-200 ease-in-out"
      />
    </div>
  )
}

export default SearchBar
