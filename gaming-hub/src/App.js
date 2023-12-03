import NavbarLinksList from './components/molecules/NavbarLinksList/NavbarLinksList';
import bannerURL from "./components/organisms/Banner/hub_esterno_hq.jpeg";
import Banner from "./components/organisms/Banner/Banner";
import TitleVetrina from "./components/atoms/TitleVetrina/TitleVetrina";
import Vetrina from "./components/organisms/Vetrina/Vetrina";

function App() {

    return (
        <div className="App">
            <Banner />
            <Vetrina type="menu"/>
        </div>
    );
}

export default App;
