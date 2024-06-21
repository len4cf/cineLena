import { useLocation } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import SearchBar from "../SearchBar"

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {location.pathname === "/" || location.pathname === "/mostpopular" ? (
        <SearchBar />
      ) : null}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default BaseLayout
