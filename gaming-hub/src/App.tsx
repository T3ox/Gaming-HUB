import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import NavbarLink from "./components/atoms/NavbarLink/NavbarLink";

function App() {
    return useRoutes(routes);
}

export default App;
