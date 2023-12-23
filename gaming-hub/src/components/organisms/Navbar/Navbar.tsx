import NavbarLinksList from "../../molecules/NavbarLinksList/NavbarLinksList";

const styles: React.CSSProperties = {
    display: "flex",
};

const Navbar = () => {
    return (
        <nav style={styles}>
            <h2>Gaming HUB Voghera</h2>
            <NavbarLinksList />
        </nav>
    )
}

export default Navbar;