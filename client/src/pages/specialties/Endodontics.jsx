import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/endodontie-205.webp";

const Endodontics = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Endodontics" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_8")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Endodontics</p>
            </div>
        </Wrapper>
    );
};

export default Endodontics;
