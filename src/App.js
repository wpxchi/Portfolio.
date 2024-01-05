import { Route, Routes} from "react-router-dom";

import HomeNavbar from "./Components/NavBar";
import Homepage from "./Home/Home";
import AboutMe from "./About Me/Aboutme";
import Projects from "./Projects/Projects";
import Cv from "./Cv/cv";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/CV" element={<Cv />} />
        {/* Ruta comodín para NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;