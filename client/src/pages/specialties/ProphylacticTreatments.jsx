import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/specialities-traitements-prophylactiques.webp";
import dentalImage from "../../assets/images/home-card-6.jpg";

const ProphylacticTreatments = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img
                        src={heroImage}
                        alt={t("navbar.specialties_list.prophylactic_treatments")}
                    />
                </div>
            </div>

            <section className="content-section">
                <div className="container">
                    <span className="content-badge">{t("specialites.prophylactic.badge")}</span>
                    <p className="content-title">{t("specialites.prophylactic.title")}</p>

                    <div className="content-grid">
                        <div className="content-image">
                            <img
                                src={dentalImage}
                                alt={t("navbar.specialties_list.prophylactic_treatments")}
                            />
                        </div>

                        <div className="content-text">
                            <p className="main-text">{t("specialites.prophylactic.intro_title")}</p>
                            <p className="normal-text">{t("specialites.prophylactic.intro_p1")}</p>
                            <p className="normal-text">{t("specialites.prophylactic.intro_p2")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section-2"></section>
        </Wrapper>
    );
};

export default ProphylacticTreatments;
