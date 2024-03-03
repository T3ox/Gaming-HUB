import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";


function App() {
    return useRoutes(routes);
}

export default App;
