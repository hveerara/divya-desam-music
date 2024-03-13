import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Song from "./components/Song";
import SongCategory from "./components/SongCategory";
import { songsData } from "./lib/songs-data";

function App() {
  const chozhaNaadu = songsData["chozhaNaadu"];
  const naduNaadu = songsData["naduNaadu"];
  const thondaiNaadu = songsData["thondaiNaadu"];
  const malaiNaadu = songsData["malaiNaadu"];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/song/chozhaNaadu/:songTitle"
            element={<Song songs={chozhaNaadu} />}
          />
          <Route
            path="/chozhaNaadu"
            element={
              <SongCategory
                pageTitle="Chozha Naatu Thirupathigal Songs"
                songs={chozhaNaadu}
              />
            }
          />
          <Route
            path="/song/naduNaadu/:songTitle"
            element={<Song songs={naduNaadu} />}
          />
          <Route
            path="/naduNaadu"
            element={
              <SongCategory
                pageTitle="Nadu Naatu Thirupathigal Songs"
                songs={naduNaadu}
              />
            }
          />
          <Route
            path="/song/thondaiNaadu/:songTitle"
            element={<Song songs={thondaiNaadu} />}
          />
          <Route
            path="/thondaiNaadu"
            element={
              <SongCategory
                pageTitle="Thondai Naatu Thirupathigal Songs"
                songs={thondaiNaadu}
              />
            }
          />
          <Route
            path="/song/malaiNaadu/:songTitle"
            element={<Song songs={malaiNaadu} />}
          />
          <Route
            path="/malaiNaadu"
            element={
              <SongCategory
                pageTitle="Malai Naatu Thirupathigal Songs"
                songs={malaiNaadu}
              />
            }
          />
          {/* <Route
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
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
