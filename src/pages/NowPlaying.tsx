import { useEffect, useState } from "react"
import { token } from "../config/token"
import { Movie } from "../types/Movie"
import Card from "../components/Card"
import { CircularProgress } from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function NowPlaying() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [load, setLoad] = useState(false)
  const [page, setPage] = useState(1)

  const totalPages = 5

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }

  const fetchMovies = (page: number) => {
    setLoad(true)

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${page}`,
      options
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies(data.results)
        setTimeout(() => setLoad(false), 700)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchMovies(page)
  }, [page])

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
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
        <>
          <h1 className="text-center mt-2 text-green-500 text-2xl font-bold">
            Em cartaz
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 hover:">
            {movies.map((movie) => {
              return (
                <Card
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              )
            })}
          </div>
          <div className="flex justify-center mt-10 gap-3 items-center pb-5">
            <button
              className={`p-2 rounded ${
                page === 1 ? "bg-zinc-400" : "bg-green-500 "
              }`}
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              <FaArrowLeft />
            </button>
            <p className="text-green-500">{page}</p>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`bg-green-500 p-2 rounded ${
                page === totalPages ? "bg-zinc-300" : ""
              }`}
            >
              <FaArrowRight color="black" />
            </button>
          </div>
        </>
      )}
    </>
  )
}
