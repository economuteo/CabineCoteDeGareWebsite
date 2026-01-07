import { useTranslation } from "react-i18next";
import Wrapper from "../assets/wrappers/Home";
import { ServiceCard, GoogleMapEmbed } from "../components";
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
// import homeParralax from "../assets/images/home-parallax.webp";
import facebookLogo from "../assets/images/facebook-logo.webp";
import instagramLogo from "../assets/images/instagram-logo.webp";
import whatsappLogo from "../assets/images/whatsapp-logo.webp";

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
            <div className="content-7">
                <div className="map">
                    <GoogleMapEmbed />
                </div>
                <div className="contact">
                    <p className="contact-title text-uppercase">{t("home.home_34")}</p>
                    <div className="zone">
                        <p className="zone-title text-uppercase">{t("home.home_35")}:</p>
                        <p className="zone-description">0212189218</p>
                        <p className="zone-description">0783006383</p>
                    </div>

                    <div className="zone">
                        <p className="zone-title text-uppercase">{t("home.home_36")}:</p>
                        <p className="zone-description">info@dentiste-cote-gare-bussigny.ch</p>
                    </div>

                    <div className="zone">
                        <p className="zone-title text-uppercase">{t("home.home_37")}:</p>
                        <p className="zone-description">{t("home.home_38")}: 8h00 - 20h00</p>
                        <p className="zone-description">{t("home.home_39")}: 9h00 - 15h00</p>
                        <p className="zone-description">
                            {t("home.home_40")}: {t("home.home_41")}
                        </p>
                    </div>

                    <div className="socials">
                        <a
                            href="https://www.facebook.com/p/Cabinet-dentaire-c%C3%B4t%C3%A9-gare-Bussigny-61566890726236/"
                            target="_blank">
                            <img src={facebookLogo} alt="facebook" />
                        </a>
                        <a
                            href="https://www.instagram.com/cabinet_cote_gare_bussigny/"
                            target="_blank">
                            <img src={instagramLogo} alt="" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=41783006383" target="_blank">
                            <img src={whatsappLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="content-8">
                <div className="container">
                    <p className="title text-uppercase">{t("home.home_42")}</p>
                    <p className="description">{t("home.home_43")}</p>

                    <form method="post" className="form-horizontal">
                        <div className="form-inputs">
                            <div className="row">
                                <div className="col">
                                    <input
                                        placeholder="Name*"
                                        name="Name"
                                        className="form-control valid"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                                <div className="col">
                                    <input
                                        placeholder="Email*"
                                        name="Email"
                                        className="form-control valid"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        placeholder="Phone*"
                                        name="PhoneNumber"
                                        className="form-control valid"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                                <div className="col">
                                    <input
                                        placeholder="Service"
                                        name="Service"
                                        className="form-control valid"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col">
                                <input
                                    placeholder="Visit Purpose"
                                    name="VisitReason"
                                    className="form-control valid"
                                />
                                <span className="text-danger"></span>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        placeholder="Date"
                                        name="Date"
                                        className="form-control valid"
                                        type="text"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                                <div className="col">
                                    <input
                                        placeholder="Time"
                                        name="Time"
                                        className="form-control valid"
                                        type="text"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col" id="agreement">
                            <input
                                id="checkbox"
                                type="checkbox"
                                required
                                name="DeliveryCheckoutUserConsent"
                            />
                            <span>
                                I agree with the
                                <a
                                    className="white-txt text-decoration-underline"
                                    href="/en/terms-and-conditions"
                                    target="_blank"
                                    rel="noreferrer">
                                    {" "}
                                    terms and conditions{" "}
                                </a>
                                and
                                <a
                                    className="white-txt text-decoration-underline"
                                    href="/en/privacy-policy"
                                    target="_blank"
                                    rel="noreferrer">
                                    {" "}
                                    privacy policy
                                </a>
                            </span>
                        </div>
                        <button type="submit" className="btn-primary">
                            Make appointment
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
