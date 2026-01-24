import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/blanchiment-et-claircissement-des-dents-236.webp";

const TeethWhitening = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Teeth Whitening" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_4")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Teeth Whitening and Brightening</p>
            </div>
        </Wrapper>
    );
};

export default TeethWhitening;
