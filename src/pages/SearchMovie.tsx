import { useState } from "react"
import { Movie } from "../types/Movie"
import { token } from "../config/token"
import Card from "../components/Card"
import { CircularProgress } from "@chakra-ui/react"

const SearchMoviePage = () => {
  const [search, setSearch] = useState("")
  const [movieFound, setMovieFound] = useState<Movie[]>([])
  const [load, setLoad] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }

  const fetchSearchMovie = () => {
    setLoad(true)

    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, options)
      .then((data) => data.json())
      .then((data) => {
        setMovieFound(data.results)
        setTimeout(() => setLoad(false), 700)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <div>
        <div className="flex justify-center gap-3">
          <input
            type="text"
            className="text-center p-4 text-xl bg-zinc-700 letter"
            placeholder="Pesquise por um filme"
            onChange={handleSearch}
            value={search}
          />
          <button
            className="bg-green-500 p-4 text-white"
            onClick={fetchSearchMovie}
          >
            Pesquisar
          </button>
        </div>
        {load && (
          <div className="text-center">
            <CircularProgress
              color="green"
              className="md:mt-[15%] mt-[50%]"
              isIndeterminate
            />
          </div>
        )}
        {!load && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 hover:">
            {movieFound.map((movie) => {
              return (
                <Card
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchMoviePage
