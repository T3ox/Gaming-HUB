import NavbarLinksList from '../../molecules/NavbarLinksList/NavbarLinksList';
import './styles.scss';

const bannerURL: string = require("../../../images/hub_esterno_hq.jpeg");

const Header = () => {
    return (
        <div>
            <NavbarLinksList/>
            <img src={bannerURL} alt="banner" className='banner-img'/>
        </div>
    );
}

export default Header;