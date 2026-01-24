import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/protheses-fixes-et-amovibles-206.jpg";

const FixedRemovableDentures = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Fixed and Removable Dentures" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_9")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Fixed and Removable Dentures</p>
            </div>
        </Wrapper>
    );
};

export default FixedRemovableDentures;
