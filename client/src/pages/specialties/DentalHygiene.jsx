import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/hygiene-dentaire-237.webp";

const DentalHygiene = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Dental Hygiene" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_6")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Dental Hygiene</p>
            </div>
        </Wrapper>
    );
};

export default DentalHygiene;
