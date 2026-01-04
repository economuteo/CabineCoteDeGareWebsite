import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Wrapper from "../assets/wrappers/SideActions";

const LANGUAGES = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "al", label: "AL" },
    { code: "de", label: "DE" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
    { code: "it", label: "IT" },
];

const SideActions = () => {
    const { i18n } = useTranslation();
    const currentLangCode = (i18n.resolvedLanguage || i18n.language || "en").toLowerCase();
    const currentLang = currentLangCode.toUpperCase();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen((open) => !open);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isDropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <Wrapper>
            <a className="whatsapp-btn" href="https://api.whatsapp.com/send?phone=41783006383">
                <span>Whatsapp</span>
            </a>
            <div className="culture-container">
                <nav className="CultureNav navbar navbar-light navbar-expand-lg">
                    <div id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto">
                            <div className="nav-item dropdown" ref={dropdownRef}>
                                <div
                                    role="button"
                                    className="dropdown-item"
                                    id="navbarDropdown"
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen}
                                    onClick={toggleDropdown}>
                                    {currentLang}
                                </div>
                                <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                    {LANGUAGES.filter(({ code }) => code !== currentLangCode).map(
                                        ({ code, label }) => (
                                            <div key={code}>
                                                <div
                                                    role="button"
                                                    className={`dropdown-item ${
                                                        currentLang === label ? "active" : ""
                                                    }`}
                                                    onClick={() => handleLanguageChange(code)}>
                                                    {label}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Wrapper>
    );
};

export default SideActions;
