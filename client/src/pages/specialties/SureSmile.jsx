import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/sure-smile-aligners-234.jpg";

const SureSmile = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Sure Smile" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_10")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Sure Smile</p>
            </div>
        </Wrapper>
    );
};

export default SureSmile;
