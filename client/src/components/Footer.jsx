import Wrapper from "../assets/wrappers/Footer";
import LogoWhite from "../assets/images/logo-white.webp";
import { useTranslation } from "react-i18next";
import facebookLogo from "../assets/images/facebook-logo.webp";
import instagramLogo from "../assets/images/instagram-logo.webp";
import whatsappLogo from "../assets/images/whatsapp-logo.webp";

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
            </div>
        </Wrapper>
    );
};

export default Footer;
