import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/facettes-235.webp";

const Veneers = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Veneers" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_3")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Veneers</p>
            </div>
        </Wrapper>
    );
};

export default Veneers;
