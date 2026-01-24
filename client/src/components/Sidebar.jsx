import logo from "../assets/images/logo.png";
import close from "../assets/images/close.svg";
import Wrapper from "../assets/wrappers/Sidebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar }) => {
    const { t } = useTranslation();

    return (
        <Wrapper className="collapse navbar-collapse show" id="navbarTogglerDemo03">
            <div className="menu-header">
                <div className="menu-logo">
                    <Link to="/" onClick={toggleSidebar}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <img id="closeButton" src={close} alt="" onClick={toggleSidebar} />
            </div>

            <div className="background-close-menu"></div>

            <div className="navbar-nav mr-auto align-items-lg-center">
                <p className="nav-item">
                    <Link
                        to="/"
                        className="nav-link active"
                        aria-current="page"
                        onClick={toggleSidebar}>
                        {t("navbar.home")}
                    </Link>
                </p>
                <p className="nav-item">
                    <Link to="/pricing" className="nav-link" onClick={toggleSidebar}>
                        {t("navbar.pricing")}
                    </Link>
                </p>
                <p className="nav-item dropdown">
                    <Link
                        to="/specialites"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-link dropdown-toggle"
                        onClick={toggleSidebar}>
                        {t("navbar.specialties")}
                    </Link>
                </p>
                <p className="nav-item">
                    <Link to="/blog" className="nav-link" onClick={toggleSidebar}>
                        {t("navbar.blog")}
                    </Link>
                </p>
                <p className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={toggleSidebar}>
                        {t("navbar.contact")}
                    </Link>
                </p>
                <p className="nav-item">
                    <Link to="/carriere" className="nav-link" onClick={toggleSidebar}>
                        {t("navbar.careers")}
                    </Link>
                </p>
            </div>

            <Link
                to="/prendre-rdv"
                className="btn-primary appointment-button"
                onClick={toggleSidebar}>
                {t("navbar.book_appointment")}
            </Link>
        </Wrapper>
    );
};

export default Sidebar;
