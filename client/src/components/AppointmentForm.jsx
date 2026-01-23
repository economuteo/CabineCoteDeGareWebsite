import { useTranslation } from "react-i18next";
import Wrapper from "../assets/wrappers/AppointmentForm";

const AppointmentForm = () => {
    const { t } = useTranslation();

    return (
        <Wrapper method="post" className="form-horizontal">
            <div className="form-inputs">
                <div className="row">
                    <div className="col">
                        <input
                            placeholder={t("home.form_name")}
                            name="Name"
                            className="form-control valid"
                        />
                        <span className="text-danger"></span>
                    </div>
                    <div className="col">
                        <input
                            placeholder={t("home.form_email")}
                            name="Email"
                            className="form-control valid"
                        />
                        <span className="text-danger"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            placeholder={t("home.form_phone")}
                            name="PhoneNumber"
                            className="form-control valid"
                        />
                        <span className="text-danger"></span>
                    </div>
                    <div className="col">
                        <input
                            placeholder={t("home.form_service")}
                            name="Service"
                            className="form-control valid"
                        />
                        <span className="text-danger"></span>
                    </div>
                </div>
                <div className="col">
                    <input
                        placeholder={t("home.form_visit_purpose")}
                        name="VisitReason"
                        className="form-control valid"
                    />
                    <span className="text-danger"></span>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            placeholder={t("home.form_date")}
                            name="Date"
                            className="form-control valid"
                            type="date"
                        />
                        <span className="text-danger"></span>
                    </div>
                    <div className="col">
                        <input
                            placeholder={t("home.form_time")}
                            name="Time"
                            className="form-control valid"
                            type="time"
                        />
                        <span className="text-danger"></span>
                    </div>
                </div>
            </div>
            <div id="agreement">
                <input id="checkbox" type="checkbox" required name="DeliveryCheckoutUserConsent" />
                <span>
                    {t("home.form_agreement")}
                    <a
                        className="white-txt text-decoration-underline"
                        href="/en/terms-and-conditions"
                        target="_blank"
                        rel="noreferrer">
                        {" "}
                        {t("home.form_terms")}{" "}
                    </a>
                    {t("home.form_and")}
                    <a
                        className="white-txt text-decoration-underline"
                        href="/en/privacy-policy"
                        target="_blank"
                        rel="noreferrer">
                        {" "}
                        {t("home.form_privacy")}
                    </a>
                </span>
            </div>
            <button type="submit" className="btn-primary">
                {t("home.form_submit")}
            </button>
        </Wrapper>
    );
};

export default AppointmentForm;
