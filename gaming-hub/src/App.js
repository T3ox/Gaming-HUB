import Navbar from './Navbar';
import bannerURL from "./Immagini/hub_esterno_hq.jpeg";

function App() {

    return (
        <div className="App">
            <Navbar />
            <img src={bannerURL} alt="banner" className="banner"/>
        </div>
    );
}

export default App;
