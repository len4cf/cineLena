import { useEffect, useState } from "react"
import { Movie } from "../types/Movie"
import { token } from "../config/token"
import { useParams } from "react-router-dom"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { CircularProgress, Spinner } from "@chakra-ui/react"

const DetailsPage = () => {
  const [toggleSeeMore, setToggleSeeMore] = useState<boolean>(false)
  const [genres, setGenres] = useState<string[]>([])
  const [load, setLoad] = useState(false)
  const [show, setShow] = useState("hide")

  const [movieId, setMovieId] = useState<Movie>({
    original_title: "",
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
    setTimeout(() => setShow("show"), 20)

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
      .then((data) => data.json())
      .then((data) => {
        setMovieId(data)
        setGenres(data.genres.map((genre: { name: string }) => genre.name))
        setTimeout(() => setLoad(false), 5000)
      })
      .catch((err) => console.error(err))
  }, [id])

  return (
    <>
      {load && (
        <div className="text-center h-screen flex justify-center">
          <CircularProgress color="yellow" className="" isIndeterminate />
        </div>
      )}
      {!load && (
        <div className="flex justify-center gap-10 mt-14 ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`}
            alt=""
            className="w-[300px] h-auto rounded-lg"
          />
          <div className="w-[500px] flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <h1 className="text-yellow-500 font-bold text-4xl">
                {movieId.original_title}
              </h1>
              <div>
                {genres.map((genre) => (
                  <span className="font-regular mr-3 text-yellow-200 bg-zinc-900 p-2 text-[12px]">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-yellow-500 font-thin">{movieId.overview}</p>
            <p className="text-white font-bold">⭐{movieId.vote_average}</p>
            <p
              className="text-yellow-500 cursor-pointer flex items-center gap-2"
              onClick={() => setToggleSeeMore(!toggleSeeMore)}
            >
              Veja {toggleSeeMore ? "menos" : "mais"} sobre o filme{" "}
              {toggleSeeMore ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </p>
            {toggleSeeMore && (
              <div className="text-white font-thin bg-zinc-800 p-4 rounded-md"></div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default DetailsPage
