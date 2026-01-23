import { useTranslation } from "react-i18next";
import Wrapper from "../assets/wrappers/Pricing";
import heroImage from "../assets/images/home-gallery-2.jpg";
import clinicRoom from "../assets/images/home-gallery-1.webp";
import loungeImage from "../assets/images/home-gallery-3.webp";

const Pricing = () => {
    const { t } = useTranslation();

    const pricingItems = [
        {
            key: "welcome",
            price: t("pricing.items.welcome_price"),
            title: t("pricing.items.welcome_title"),
            description: t("pricing.items.welcome_desc"),
        },
        {
            key: "hygiene_standard",
            price: t("pricing.items.hygiene_standard_price"),
            title: t("pricing.items.hygiene_standard_title"),
            description: t("pricing.items.hygiene_standard_desc"),
        },
        {
            key: "control_radiographs",
            price: t("pricing.items.control_radiographs_price"),
            title: t("pricing.items.control_radiographs_title"),
            description: t("pricing.items.control_radiographs_desc"),
        },
        {
            key: "kids_hygiene",
            price: t("pricing.items.kids_hygiene_price"),
            title: t("pricing.items.kids_hygiene_title"),
            description: t("pricing.items.kids_hygiene_desc"),
        },
        {
            key: "home_whitening",
            price: t("pricing.items.home_whitening_price"),
            title: t("pricing.items.home_whitening_title"),
            description: t("pricing.items.home_whitening_desc"),
        },
        {
            key: "chairside_whitening",
            price: t("pricing.items.chairside_whitening_price"),
            title: t("pricing.items.chairside_whitening_title"),
            description: t("pricing.items.chairside_whitening_desc"),
        },
        {
            key: "two_veneers",
            price: t("pricing.items.two_veneers_price"),
            title: t("pricing.items.two_veneers_title"),
            description: t("pricing.items.two_veneers_desc"),
        },
        {
            key: "four_veneers",
            price: t("pricing.items.four_veneers_price"),
            title: t("pricing.items.four_veneers_title"),
            description: t("pricing.items.four_veneers_desc"),
        },
        {
            key: "six_eight_veneers",
            price: t("pricing.items.six_eight_veneers_price"),
            title: t("pricing.items.six_eight_veneers_title"),
            description: t("pricing.items.six_eight_veneers_desc"),
        },
        {
            key: "transparent_aligners",
            price: t("pricing.items.transparent_aligners_price"),
            title: t("pricing.items.transparent_aligners_title"),
            description: t("pricing.items.transparent_aligners_desc"),
        },
        {
            key: "retainer",
            price: t("pricing.items.retainer_price"),
            title: t("pricing.items.retainer_title"),
            description: t("pricing.items.retainer_desc"),
        },
        {
            key: "bonded_wire",
            price: t("pricing.items.bonded_wire_price"),
            title: t("pricing.items.bonded_wire_title"),
            description: t("pricing.items.bonded_wire_desc"),
        },
        {
            key: "emergency",
            price: t("pricing.items.emergency_price"),
            title: t("pricing.items.emergency_title"),
            description: t("pricing.items.emergency_desc"),
        },
        {
            key: "fissure_sealant",
            price: t("pricing.items.fissure_sealant_price"),
            title: t("pricing.items.fissure_sealant_title"),
            description: t("pricing.items.fissure_sealant_desc"),
        },
        {
            key: "tooth_jewel",
            price: t("pricing.items.tooth_jewel_price"),
            title: t("pricing.items.tooth_jewel_title"),
            description: t("pricing.items.tooth_jewel_desc"),
        },
        {
            key: "composite_filling",
            price: t("pricing.items.composite_filling_price"),
            title: t("pricing.items.composite_filling_title"),
            description: t("pricing.items.composite_filling_desc"),
        },
        {
            key: "root_treatment",
            price: t("pricing.items.root_treatment_price"),
            title: t("pricing.items.root_treatment_title"),
            description: t("pricing.items.root_treatment_desc"),
        },
        {
            key: "dental_implant",
            price: t("pricing.items.dental_implant_price"),
            title: t("pricing.items.dental_implant_title"),
            description: t("pricing.items.dental_implant_desc"),
        },
        {
            key: "onlay",
            price: t("pricing.items.onlay_price"),
            title: t("pricing.items.onlay_title"),
            description: t("pricing.items.onlay_desc"),
        },
    ];

    return (
        <Wrapper>
            <section className="hero"></section>

            <section className="intro container">
                <h1 className="page-heading">
                    <b>{t("pricing.heading")}</b>
                </h1>
                <span className="badge">{t("pricing.badge")}</span>
            </section>

            <section className="two-column container">
                <div className="image-col">
                    <img src={clinicRoom} alt={t("pricing.heading") || "Dental clinic"} />
                </div>
                <div className="text-col">
                    <p className="highlight">{t("pricing.highlight")}</p>
                    <p className="normal-text">{t("pricing.intro_p1")}</p>
                    <p className="normal-text">{t("pricing.intro_p2")}</p>
                    {t("pricing.intro_p3") && <p>{t("pricing.intro_p3")}</p>}
                </div>
            </section>

            <section className="two-column reverse container">
                <div className="text-col">
                    <h3 className="highlight">{t("pricing.section2_title")}</h3>
                    <p className="normal-text">{t("pricing.section2_p1")}</p>
                    <p className="normal-text">{t("pricing.section2_p2")}</p>
                    <p className="normal-text">{t("pricing.section2_p3")}</p>
                    <a className="cta" href="tel:0212189218">
                        {t("pricing.cta")}
                    </a>
                </div>
                <div className="image-col">
                    <img src={loungeImage} alt={t("pricing.section2_title") || "Waiting area"} />
                </div>
            </section>

            <section className="price-list container">
                <p className="highlight title-space">{t("pricing.pricing_title")}</p>
                <div className="items">
                    {pricingItems.map((item) => (
                        <div className="item" key={item.key}>
                            <div className="item-text">
                                <p className="item-title">{item.title}</p>
                                {item.description && (
                                    <p className="item-desc">{item.description}</p>
                                )}
                            </div>
                            <div className="item-price">{item.price}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Wrapper>
    );
};

export default Pricing;
