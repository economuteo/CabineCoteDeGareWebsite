import Wrapper from "../assets/wrappers/Outlet.js";
import { Navbar, SideActions } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Outlet className="currentPage" />
            </Wrapper>
            <SideActions />
        </>
    );
};

export default Layout;
