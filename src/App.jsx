import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
