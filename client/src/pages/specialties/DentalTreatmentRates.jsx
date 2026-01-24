import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/tarif-soins-dentaires-220.webp";

const DentalTreatmentRates = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Dental Treatment Rates" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_11")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Dental Treatment Rates</p>
            </div>
        </Wrapper>
    );
};

export default DentalTreatmentRates;
