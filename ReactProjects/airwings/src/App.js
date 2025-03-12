import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/LandingPage/pages/HomePage/HomePage";
import ServicesPage from "./pages/LandingPage/pages/ServicesPage/ServicesPage";
import ROUTES from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.landingPage} element={<LandingPage />}>
          <Route path={ROUTES.homePage} element={<HomePage />} />
          <Route path={ROUTES.servicesPage} element={<ServicesPage />} />
        </Route>
        <Route path={ROUTES.loginPage} element={<LoginPage />} />
        <Route path={ROUTES.registerPage} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
