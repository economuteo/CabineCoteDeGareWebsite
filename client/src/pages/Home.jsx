import { useTranslation } from "react-i18next";
import Wrapper from "../assets/wrappers/Home";
import { ServiceCard } from "../components";
import homePhoto from "../assets/images/cabinet-dentaire-bussigny-355.jpg";
import homePozaProfil1 from "../assets/images/home-poza-profil.webp";
import homePozaProfil2 from "../assets/images/home-poza-profil-2.webp";
import homeCard1 from "../assets/images/home-card-1.jpg";
import homeCard2 from "../assets/images/home-card-2.jpg";
import homeCard3 from "../assets/images/home-card-3.jpg";
import homeCard4 from "../assets/images/home-card-4.jpg";
import homeCard5 from "../assets/images/home-card-5.jpg";
import homeCard6 from "../assets/images/home-card-6.jpg";
import homeCard7 from "../assets/images/home-card-7.jpg";
import homeGallery1 from "../assets/images/home-gallery-1.webp";
import homeGallery2 from "../assets/images/home-gallery-2.jpg";
import homeGallery3 from "../assets/images/home-gallery-3.webp";
import homeGallery4 from "../assets/images/home-gallery-4.jpg";
import homeGallery5 from "../assets/images/home-gallery-5.webp";
import homeGallery6 from "../assets/images/home-gallery-6.jpg";
import homeTeam1 from "../assets/images/home-team-1.webp";
import homeTeam2 from "../assets/images/home-team-2.webp";
import homeTeam3 from "../assets/images/home-team-3.webp";
import homeTeam4 from "../assets/images/home-team-4.webp";

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
            <div className="container content-3">
                <p className="home-11">{t("home.home_11")}</p>
                <div className="dental-services">
                    <div id="first-column" className="dental-services-column">
                        <ServiceCard
                            image={homeCard1}
                            title={t("home.home_12")}
                            description={t("home.home_card_description")}
                            to="/services/dental-hygiene"
                        />
                        <ServiceCard
                            image={homeCard2}
                            title={t("home.home_13")}
                            description={t("home.home_card_description")}
                            to="/services/dental"
                        />
                    </div>
                    <div id="second-column" className="dental-services-column">
                        <ServiceCard
                            image={homeCard3}
                            title={t("home.home_14")}
                            description={t("home.home_card_description")}
                        />
                        <ServiceCard
                            image={homeCard4}
                            title={t("home.home_15")}
                            description={t("home.home_card_description")}
                        />
                        <ServiceCard
                            image={homeCard5}
                            title={t("home.home_16")}
                            description={t("home.home_card_description")}
                        />
                    </div>
                    <div id="third-column" className="dental-services-column">
                        <ServiceCard
                            image={homeCard6}
                            title={t("home.home_17")}
                            description={t("home.home_card_description")}
                        />
                        <ServiceCard
                            image={homeCard7}
                            title={t("home.home_18")}
                            description={t("home.home_card_description")}
                        />
                    </div>
                </div>
            </div>
            <div className="content-4">
                <p className="container home-19">{t("home.home_19")}</p>
                <div className="content-4-photos">
                    <div className="image-container">
                        <img src={homeGallery1} />
                    </div>
                    <div className="image-container">
                        <img src={homeGallery2} />
                    </div>
                    <div className="image-container">
                        <img src={homeGallery3} />
                    </div>
                    <div className="image-container">
                        <img src={homeGallery4} />
                    </div>
                    <div className="image-container">
                        <img src={homeGallery5} />
                    </div>
                    <div className="image-container">
                        <img src={homeGallery6} />
                    </div>
                </div>
            </div>
            <div className="container content-5">
                <p className="home-20">{t("home.home_20")}</p>
                <div className="top-blogs-short"></div>
            </div>
            <div className="container content-6">
                <p className="home-21">{t("home.home_21")}</p>
                <div className="team-members">
                    <div className="team-member">
                        <img loading="lazy" src={homeTeam1} />
                        <div>
                            <p className="team-member-name">{t("home.home_24")}</p>
                            <p className="team-member-role">{t("home.home_22")}</p>
                            <p className="team-member-description">{t("home.home_23")}</p>
                        </div>
                    </div>
                    <div className="team-member member-right">
                        <img loading="lazy" src={homeTeam2} />
                        <div>
                            <p className="team-member-name">{t("home.home_27")}</p>
                            <p className="team-member-role">{t("home.home_25")}</p>
                            <p className="team-member-description">{t("home.home_26")}</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img loading="lazy" src={homeTeam3} />
                        <div>
                            <p className="team-member-name">{t("home.home_30")}</p>
                            <p className="team-member-role">{t("home.home_28")}</p>
                            <p className="team-member-description">{t("home.home_29")}</p>
                        </div>
                    </div>
                    <div className="team-member member-right">
                        <img loading="lazy" src={homeTeam4} />
                        <div>
                            <p className="team-member-name">{t("home.home_33")}</p>
                            <p className="team-member-role">{t("home.home_31")}</p>
                            <p className="team-member-description">{t("home.home_32")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
