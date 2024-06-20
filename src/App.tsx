import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import NowPlaying from "./pages/NowPlaying"
import DetailsPage from "./pages/Details"
import MostPopularPage from "./pages/MostPopular"

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/mostpopular" element={<MostPopularPage/>}/>
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
