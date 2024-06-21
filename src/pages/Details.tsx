import { useEffect, useState } from "react"
import { Movie } from "../types/Movie"
import { token } from "../config/token"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@chakra-ui/react"

const DetailsPage = () => {
  const [genres, setGenres] = useState<string[]>([])
  const [load, setLoad] = useState(false)

  const [movieId, setMovieId] = useState<Movie>({
    title: "",
    id: 0,
    poster_path: "",
    overview: "",
    vote_average: 0,
  })

  const { id } = useParams()

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    setLoad(true)

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
      .then((data) => data.json())
      .then((data) => {
        setMovieId(data)
        setGenres(data.genres.map((genre: { name: string }) => genre.name))
        setTimeout(() => setLoad(false), 600)
      })
      .catch((err) => console.error(err))
  }, [id])

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
          <div className="flex justify-center gap-10 mt-14 md:flex-row flex-col md:items-start items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`}
              alt=""
              className="md:w-[300px] w-[180px] h-auto rounded-lg"
            />
            <div className="w-[500px] flex flex-col gap-3">
              <div className="flex md:items-start items-center gap-4 flex-col">
                <h1 className="text-green-500 font-bold md:text-4xl text-xl">
                  {movieId.title}
                </h1>
                <div className="md:mb-0 mb-4">
                  {genres.map((genre) => (
                    <span className="font-regular mr-3 text-green-200 bg-zinc-900 p-2 text-[12px]">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-green-500 font-thin md:m-0 m-auto md:w-fit w-[300px]">
                {movieId.overview}
              </p>
              <p className="text-white font-bold md:m-0 m-auto ">
                ⭐{movieId.vote_average}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default DetailsPage
