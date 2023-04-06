import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../elements/header/header';
import NewHome from '../pages/home/new-home';
import AboutPage from '../pages/about-page/about-page';
import NotFound from '../pages/not-found/not-found';
import EmployeesAddingFormPage from '../pages/adding-page/adding-form-page';
import ErrorMessage from '../elements/erorr/error';
import Spinner from '../spinner/spinner';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<NewHome />}
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
