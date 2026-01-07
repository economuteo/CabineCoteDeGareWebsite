import Wrapper from "../assets/wrappers/Outlet.js";
import { Navbar, SideActions, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Outlet className="currentPage" />
            </Wrapper>
            <SideActions />
            <Footer />
        </>
    );
};

export default Layout;
