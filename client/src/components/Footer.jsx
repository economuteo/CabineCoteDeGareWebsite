import Wrapper from "../assets/wrappers/Footer";
import LogoWhite from "../assets/images/logo-white.webp";
import { useTranslation } from "react-i18next";
import facebookLogo from "../assets/images/facebook-logo.webp";
import instagramLogo from "../assets/images/instagram-logo.webp";
import whatsappLogo from "../assets/images/whatsapp-logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="container">
                <div className="content-intro">
                    <div className="left-part">
                        <img id="logo" src={LogoWhite} alt="logo" />
                        <div className="footer-description">
                            <p>
                                <span>{t("footer.question")} </span>{" "}
                                {/* Asta trebuie sa duca undeva! de pus pagina */}
                                <span className="green-text">{t("footer.question_2")}</span>
                                {""} <span>?</span>
                            </p>
                            <p>{t("footer.help")}</p>
                        </div>
                    </div>
                    <div className="socials">
                        <a
                            href="https://www.facebook.com/p/Cabinet-dentaire-c%C3%B4t%C3%A9-gare-Bussigny-61566890726236/"
                            target="_blank">
                            <img src={facebookLogo} alt="facebook" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=41783006383" target="_blank">
                            <img src={whatsappLogo} alt="" />
                        </a>
                        <a
                            href="https://www.instagram.com/cabinet_cote_gare_bussigny/"
                            target="_blank">
                            <img src={instagramLogo} alt="" />
                        </a>
                    </div>
                </div>
                <div className="line">
                    <hr />
                </div>
                <nav>
                    <div className="left-part-nav">
                        <Link to="/">{t("navbar.home")}</Link>
                        <Link to="/specialties">{t("navbar.specialties")}</Link>
                        <Link to="/blog">{t("navbar.blog")}</Link>
                        <Link to="/contact">{t("navbar.contact")}</Link>
                    </div>
                    <div className="right-part-nav">
                        <Link to="/legal-notice">{t("footer.legal_notice")}</Link>
                        <Link to="/privacy-policy">{t("footer.privacy_policy")}</Link>
                        <Link to="/careers">{t("footer.careers")}</Link>
                    </div>
                </nav>
            </div>
        </Wrapper>
    );
};

export default Footer;
