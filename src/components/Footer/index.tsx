import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 shadow-xl bottom">
      <div className="py-10 flex flex-col items-center justify-around text-white gap-6">
        <div className="flex gap-3 text-2xl">
          <a href="https://github.com/len4cf">
            <FaGithub className="hover:text-green-500" />
          </a>
          <a href="https://www.linkedin.com/in/helenacarvalhoferreira/">
            <FaLinkedin className="hover:text-green-500" />
          </a>
          <a href="mailto:helenacarvalhoferreira05@gmail.com">
            <IoMdMail className="hover:text-green-500" />
          </a>
        </div>
        <p className="text-green-500 text-center">&copy; {year} CineLena.</p>
      </div>
    </footer>
  )
}

export default Footer
