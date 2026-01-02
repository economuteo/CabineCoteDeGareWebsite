import Wrapper from "../assets/wrappers/Home";
import homePhoto from "../assets/images/cabinet-dentaire-bussigny-355.jpg";
import { useTranslation } from "react-i18next";
import homePozaProfil1 from "../assets/images/home-poza-profil.jpg";
import homePozaProfil2 from "../assets/images/home-poza-profil-2.webp";

const Home = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="content">
                <img src={homePhoto} alt="Cabinet dentaire Bussigny" height="500" />
                <div className="content-description container">
                    <p className="banner-title">{t("home.home_1")}</p>
                    <div className="buttons">
                        <span className="read-more-button">
                            <a href="">{t("home.read_all")}</a>
                        </span>
                        <span className="appointment-button">
                            <a href="">{t("navbar.book_appointment")}</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="content-2">
                <img src={homePozaProfil1} alt="" />
                <div className="content-2-description">
                    <p className="title">{t("home.home_2")}</p>
                    <p className="home-3">{t("home.home_3")}</p>
                    <p>{t("home.home_4")}</p>
                    <p>{t("home.home_5")}</p>
                    <p>{t("home.home_6")}</p>
                    <p>{t("home.home_7")}</p>
                    <p>{t("home.home_8")}</p>
                    <p>{t("home.home_9")}</p>
                    <p>{t("home.home_10")}</p>
                </div>
                <img src={homePozaProfil2} alt="" />
            </div>
        </Wrapper>
    );
};

export default Home;
