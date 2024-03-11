import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Song from "./components/Song";
import SongCategory from "./components/SongCategory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/song" element={<Song />} />
          <Route path="/song/:title" element={<Song />} />
          <Route
            path="/chozhaNaadu"
            element={
              <SongCategory
                category="chozhaNaadu"
                title="Chozha Naatu Thirupathigal Songs"
              />
            }
          />
          <Route
            path="/malaiNaadu"
            element={
              <SongCategory
                category="malaiNaadu"
                title="Malai Naatu Thirupathigal Songs"
              />
            }
          />
          <Route
            path="/pandiyaNaadu"
            element={
              <SongCategory
                category="pandiyaNaadu"
                title="Pandiya Naatu Thirupathigal Songs"
              />
            }
          />
          <Route
            path="/vadaNaadu"
            element={
              <SongCategory
                category="vadaNaadu"
                title="Vada Naatu Thirupathigal Songs"
              />
            }
          />
          <Route
            path="/thondaiNaadu"
            element={
              <SongCategory
                category="thondaiNaadu"
                title="Thondai Naatu Thirupathigal Songs"
              />
            }
          />
          <Route
            path="/thirupparkadal"
            element={
              <SongCategory
                category="thirupparkadal"
                title="Thirupparkadal Songs"
              />
            }
          />
          <Route
            path="/thiruparamapadam"
            element={
              <SongCategory
                category="thiruparamapadam"
                title="Thiruparamapadam Songs"
              />
            }
          />
          <Route
            path="/prayer"
            element={<SongCategory category="prayer" title="Prayer Songs" />}
          />
          <Route
            path="/naduNaadu"
            element={
              <SongCategory
                category="naduNaadu"
                title="Nadu Naatu Thirupathigal Songs"
              />
            }
          />
          <Route
            path="/mangalam"
            element={
              <SongCategory category="mangalam" title="Mangalam Songs" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
