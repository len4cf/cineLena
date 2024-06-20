import { useEffect, useState } from "react"
import { token } from "../config/token"
import { Movie } from "../types/Movie"
import Card from "../components/Card"

export default function NowPlaying() {
  const [movies, setMovies] = useState<Movie[]>([])

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((data) => data.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h1 className="text-center mt-2 text-yellow-500 text-2xl font-bold">
        Em cartaz
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 hover:">
        {movies.map((movie) => {
          return (
            <Card
              id={movie.id}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
            />
          )
        })}
      </div>
    </>
  )
}
