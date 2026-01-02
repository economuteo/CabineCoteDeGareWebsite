import Wrapper from "../assets/wrappers/Outlet.js";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Outlet className="currentPage" />
            </Wrapper>
        </>
    );
};

export default Layout;
