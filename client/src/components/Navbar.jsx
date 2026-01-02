import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "../components";
import Wrapper from "../assets/wrappers/Navbar";
import phoneIcon from "../assets/svgs/phone-icon.svg";
import mailIcon from "../assets/svgs/mail-icon.svg";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Wrapper className={`container ${scrolled ? "scrolled" : ""}`}>
            <div className="big-navbar header">
                <div className="header-contact">
                    <span className="phoneNumber">
                        <img id="phoneImg" alt="Phone" src={phoneIcon} width="22" />
                        <a href="tel:0212189218">021 218 92 18</a>
                        <a id="secondaryNumber" href="tel:0783006383">
                            078 300 63 83
                        </a>
                    </span>
                    <span className="email">
                        <a href="mailto:info@dentiste-cote-gare-bussigny.ch">
                            <img id="emailImg" alt="Email" src={mailIcon} width="22" />
                            <span>info@dentiste-cote-gare-bussigny.ch</span>
                        </a>
                    </span>
                </div>
                <nav>
                    <span>
                        <a href="">{t("navbar.home")}</a>
                    </span>
                    <span>
                        <a href="">{t("navbar.pricing")}</a>
                    </span>
                    <span>
                        <a href="">{t("navbar.specialties")}</a>
                    </span>
                    <span>
                        <a href="">{t("navbar.blog")}</a>
                    </span>
                    <span className="nav-logo">
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </span>
                    <span>
                        <a href="">{t("navbar.contact")}</a>
                    </span>
                    <span>
                        <a href="">{t("navbar.careers")}</a>
                    </span>
                    <span className="appointment-button">
                        <a href="">{t("navbar.book_appointment")}</a>
                    </span>
                </nav>
            </div>
            <div className="small-navbar">
                <img src={logo} id="logo" alt="Logo" />
                <div className="right-side">
                    <span className="phoneNumber">
                        <img id="phoneImg" alt="Phone" src={phoneIcon} width="22" />
                        <a href="tel:0212189218">021 218 92 18</a>
                        <a id="secondaryNumber" href="tel:0783006383">
                            078 300 63 83
                        </a>
                    </span>
                    <span className="email">
                        <a href="mailto:info@dentiste-cote-gare-bussigny.ch">
                            <img id="emailImg" alt="Email" src={mailIcon} width="22" />
                            <span id="emailAddress">info@dentiste-cote-gare-bussigny.ch</span>
                        </a>
                    </span>
                    <span>
                        <HamburgerMenu />
                    </span>
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
