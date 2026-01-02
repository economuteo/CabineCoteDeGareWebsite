import Wrapper from "../assets/wrappers/Home";
import homePhoto from "../assets/images/cabinet-dentaire-bussigny-355.jpg";
import { useTranslation } from "react-i18next";
import homePozaProfil1 from "../assets/images/home-poza-profil.webp";
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
                <div className="content-2-first">
                    <img id="firstPhoto" src={homePozaProfil2} alt="" />
                </div>
                <div className="content-2-description">
                    <p className="title">{t("home.home_2")}</p>
                    <p className="home-3">{t("home.home_3")}</p>
                    <p className="home-4">{t("home.home_4")}</p>
                    <p className="home-5">{t("home.home_5")}</p>
                    <p className="home-6">{t("home.home_6")}</p>
                    <p className="home-7">{t("home.home_7")}</p>
                    <p className="home-8">{t("home.home_8")}</p>
                    <p className="home-9">{t("home.home_9")}</p>
                    <p className="home-10">
                        <i>{t("home.home_10")}</i>
                    </p>
                    <span className="appointment-button">
                        <a href="">{t("navbar.book_appointment")}</a>
                    </span>
                </div>
                <div className="content-2-second">
                    <img id="secondPhoto" src={homePozaProfil1} alt="" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
