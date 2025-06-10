import "./style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Icons from "./components/Icons";
import DailyFortune from "./components/DailyFortune";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AppRoutes } from "./components/AppRoutes";

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
