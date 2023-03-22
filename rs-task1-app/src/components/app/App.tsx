import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../elements/header/header';
import Home from '../pages/home/home';
import AboutPage from '../pages/about-page/about-page';
import NotFound from '../pages/not-found/not-found';
import EmployersAddingPage from '../pages/adding-page/adding-page';
import { Component } from 'react';

class App extends Component {
  render() {
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
              element={<EmployersAddingPage />}
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
}

export default App;
