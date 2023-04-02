import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../elements/header/header';
import Home from '../pages/home/home';
import AboutPage from '../pages/about-page/about-page';
import NotFound from '../pages/not-found/not-found';
import EmployeesAddingFormPage from '../pages/adding-page/adding-form-page';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/addEmployee"
            element={<EmployeesAddingFormPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
