import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/header";
import Home from "../home/home";
import AboutPage from "../about-page/about-page";
import NotFound from "../not-found/not-found";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
