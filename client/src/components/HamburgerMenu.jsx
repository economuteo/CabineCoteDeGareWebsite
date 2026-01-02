import { useState } from "react";
import { Sidebar } from "../components";
import Wrapper from "../assets/wrappers/HamburgerMenu";
import hamburgerMenu from "../assets/images/menu-black.svg";

const HamburgerMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const [sidebarAnimation, setSidebarAnimation] = useState(false);

    const toggleSidebar = () => {
        if (!sidebar) {
            document.body.style.overflow = "hidden";
            setSidebarAnimation(true);
            setSidebar(true);
        } else {
            document.body.style.overflow = "";
            setSidebarAnimation(false);
            setTimeout(() => {
                setSidebar(false);
            }, 300);
        }
    };

    return (
        <Wrapper>
            <span className={`hamburger ${sidebarAnimation ? "animate" : ""} `}>
                <img
                    className="hamburger-menu"
                    src={hamburgerMenu}
                    alt=""
                    onClick={toggleSidebar}
                />

                {/* overlay to darken the page; clicking it closes the sidebar */}
                {sidebar ? <div className="menu-overlay" onClick={toggleSidebar} /> : null}

                {sidebar ? (
                    <Sidebar
                        sidebar={sidebar}
                        sidebarAnimation={sidebarAnimation}
                        toggleSidebar={toggleSidebar}
                    />
                ) : null}
            </span>
        </Wrapper>
    );
};

export default HamburgerMenu;
