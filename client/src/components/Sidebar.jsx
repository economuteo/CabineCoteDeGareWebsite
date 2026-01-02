import logo from "../assets/images/logo.png";
import close from "../assets/images/close.svg";
import Wrapper from "../assets/wrappers/Sidebar";
import { useTranslation } from "react-i18next";

const Sidebar = ({ toggleSidebar }) => {
    const { t } = useTranslation();

    return (
        <Wrapper className="collapse navbar-collapse show" id="navbarTogglerDemo03">
            <div className="menu-header">
                <div className="menu-logo">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <img id="closeButton" src={close} alt="" onClick={toggleSidebar} />
            </div>

            <div className="background-close-menu"></div>

            <div className="navbar-nav mr-auto align-items-lg-center">
                <p className="nav-item">
                    <a href="/" className="nav-link active" aria-current="page">
                        {t("navbar.home")}
                    </a>
                </p>
                <p className="nav-item">
                    <a href="/tarifs" className="nav-link">
                        {t("navbar.pricing")}
                    </a>
                </p>
                <p className="nav-item dropdown">
                    <a
                        href="/specialites"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-link dropdown-toggle">
                        {t("navbar.specialties")}
                    </a>
                </p>
                <p className="nav-item">
                    <a href="/blog" className="nav-link">
                        {t("navbar.blog")}
                    </a>
                </p>
                <p className="nav-item">
                    <a href="/contact" className="nav-link">
                        {t("navbar.contact")}
                    </a>
                </p>
                <p className="nav-item">
                    <a href="/carriere" className="nav-link">
                        {t("navbar.careers")}
                    </a>
                </p>
            </div>

            <a href="/prendre-rdv" className="btn-primary appointment-button">
                {t("navbar.book_appointment")}
            </a>
        </Wrapper>
    );
};

export default Sidebar;
