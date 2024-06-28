import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import NowPlaying from "./pages/NowPlaying"
import DetailsPage from "./pages/Details"
import MostPopularPage from "./pages/MostPopular"
import SearchMoviePage from "./pages/SearchMovie"

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/mostpopular" element={<MostPopularPage />} />
          <Route path="/search" element={<SearchMoviePage />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
