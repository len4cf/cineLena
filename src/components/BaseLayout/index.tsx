import Header from "../Header"
import SearchBar from "../SearchBar"

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <Header />
      <SearchBar />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default BaseLayout
