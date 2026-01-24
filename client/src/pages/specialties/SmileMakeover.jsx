import { useTranslation } from "react-i18next";
import Wrapper from "../../assets/wrappers/ProphylacticTreatmentsPag";
import heroImage from "../../assets/images/un-relooking-du-sourire-239.webp";

const SmileMakeover = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={heroImage} alt="Smile Makeover" />
                </div>
                <div className="hero-content">
                    <h1>{t("navbar.specialties_list.specialty_7")}</h1>
                </div>
            </div>
            <div className="container specialty-page">
                <p>Content for Smile Makeover</p>
            </div>
        </Wrapper>
    );
};

export default SmileMakeover;
