import Navigation from "./navigation/Navigation";

const Layout = props => {
    return <main>
        <Navigation />
        {props.children}
    </main>
}

export default Layout;