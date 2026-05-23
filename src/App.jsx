import { BrowserRouter } from "react-router";
import "./style.css";
import { AppRoutes } from "./components/AppRoutes";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <CartDrawer />
    </BrowserRouter>
  );
}

export default App;
