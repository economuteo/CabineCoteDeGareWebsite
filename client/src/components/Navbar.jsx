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
        // trigger on the smallest scroll — treat any non-zero vertical offset as scrolled
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        // run once to set initial state (in case user loaded the page scrolled)
        // schedule via requestAnimationFrame to avoid synchronous setState inside effect
        // which can cause cascading renders.
        if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
            window.requestAnimationFrame(handleScroll);
        } else {
            // fallback
            setTimeout(handleScroll, 0);
        }

        // listen to scroll and direct user interaction events so the UI updates
        // immediately when the user starts scrolling (wheel/touchmove fire earlier
        // in some browsers/devices than the final scroll event). Use passive for
        // better scrolling performance.
        const opts = { passive: true };
        window.addEventListener("scroll", handleScroll, opts);
        window.addEventListener("wheel", handleScroll, opts);
        window.addEventListener("touchmove", handleScroll, opts);

        return () => {
            window.removeEventListener("scroll", handleScroll, opts);
            window.removeEventListener("wheel", handleScroll, opts);
            window.removeEventListener("touchmove", handleScroll, opts);
        };
    }, []);

    return (
        <Wrapper className={`${scrolled ? "scrolled" : ""}`}>
            <div className="container big-navbar header">
                <div className="header-contact">
                    <span className="phoneNumber">
                        <img id="phoneImg" alt="Phone" src={phoneIcon} width="22" />
                        <a href="tel:0212189218">
                            <b>021 218 92 18</b>
                        </a>
                        <a id="secondaryNumber" href="tel:0783006383">
                            <b>078 300 63 83</b>
                        </a>
                    </span>
                    <span className="email">
                        <a href="mailto:info@dentiste-cote-gare-bussigny.ch">
                            <img id="emailImg" alt="Email" src={mailIcon} width="22" />
                            <span>
                                <b>info@dentiste-cote-gare-bussigny.ch</b>
                            </span>
                        </a>
                    </span>
                </div>
                <nav>
                    <span>
                        <b>
                            <a href="">{t("navbar.home")}</a>
                        </b>
                    </span>
                    <span>
                        <b>
                            <a href="">{t("navbar.pricing")}</a>
                        </b>
                    </span>
                    <span>
                        <b>
                            <a href="">{t("navbar.specialties")}</a>
                        </b>
                    </span>
                    <span>
                        <b>
                            <a href="">{t("navbar.blog")}</a>
                        </b>
                    </span>
                    <span className="nav-logo">
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </span>
                    <span>
                        <b>
                            <a href="">{t("navbar.contact")}</a>
                        </b>
                    </span>
                    <span>
                        <b>
                            <a href="">{t("navbar.careers")}</a>
                        </b>
                    </span>
                    <span className="appointment-button">
                        <b>
                            <a href="">{t("navbar.book_appointment")}</a>
                        </b>
                    </span>
                </nav>
            </div>
            <div className="container small-navbar">
                <img src={logo} id="logo" alt="Logo" />
                <div className="right-side">
                    <span className="phoneNumber">
                        <img id="phoneImg" alt="Phone" src={phoneIcon} width="22" />
                        <a href="tel:0212189218">
                            <b>021 218 92 18</b>
                        </a>
                        <a id="secondaryNumber" href="tel:0783006383">
                            <b>078 300 63 83</b>
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
