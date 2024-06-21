import { Movie } from "../../types/Movie"
import { useNavigate } from "react-router-dom"

const Card = ({ poster_path, title, id }: Movie) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/details/${id}`)
  }

  return (
    <div
      className="w-[200px] flex flex-col items-center mx-auto cursor-pointer"
      key={id}
    >
      <div className="relative group">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Poster_filme"
          className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 mb-6"
          onClick={() => handleClick()}
        />
      </div>
      <h4 className="text-white max-w-full break-words">{title}</h4>
    </div>
  )
}

export default Card
