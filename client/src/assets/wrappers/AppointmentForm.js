import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;

    a {
        position: relative;
        color: inherit;
        text-decoration: none;
    }

    .content-8 {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
        padding-bottom: 80px;
        background-image: url("/src/assets/images/home-parallax.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;

        @media only screen and (max-width: 990px) {
            padding-top: 4rem;
            padding-bottom: 4rem;
        }

        @media only screen and (max-width: 576px) {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }

        .title {
            margin-bottom: 10px;
            color: #738b69 !important;
            font-size: 3.3rem;
            font-family: "Playfair", serif;
            font-weight: 500;
            text-align: center;

            @media only screen and (max-width: 1490px) {
                font-size: 2.5rem;
            }

            @media only screen and (max-width: 990px) {
                font-size: 2.3rem;
            }

            @media only screen and (max-width: 576px) {
                font-size: 2rem;
            }
        }

        .description {
            margin-bottom: 1rem;
            text-align: center;
            color: #fff;
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 1rem;
            line-height: 1.7;
        }

        form {
            width: 100%;
            max-width: 768px;
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .form-inputs {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;

                input {
                    padding: 15px;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #fff;
                    border-radius: 0;
                    box-shadow: none !important;
                    padding: 15px 15px;
                    background-color: transparent;
                    color: #fff;
                    font-family: "Plus Jakarta Sans", sans-serif;
                    font-size: 1rem;
                    outline: none;

                    &:focus {
                        border: 1px solid #fff;
                        outline: none;
                    }

                    &::placeholder {
                        color: #fff;
                        opacity: 1;
                    }
                }

                input[type="date"],
                input[type="time"] {
                    color-scheme: white;
                    direction: ltr;
                    text-align: left;

                    &::-webkit-calendar-picker-indicator {
                        filter: invert(1);
                        cursor: pointer;
                        margin-left: auto;
                    }

                    &::-webkit-date-and-time-value {
                        text-align: left;
                    }
                }

                .col {
                    width: 100%;
                }

                .row {
                    display: flex;
                    gap: 10px;

                    @media only screen and (max-width: 767px) {
                        flex-direction: column;
                    }

                    .col {
                        width: 50%;

                        @media only screen and (max-width: 767px) {
                            width: 100%;
                        }
                    }
                }
            }

            #agreement {
                display: flex;
                margin-top: 16px;
                margin-bottom: 16px;
                color: white;
                font-family: "Plus Jakarta Sans", sans-serif;

                #checkbox {
                    height: 20px;
                    width: 20px;
                    border: 1px solid #dbdbdb;
                    -webkit-appearance: none;
                    border-radius: 5px;
                    margin-top: 2px;
                    margin-right: 10px;
                    background-color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:checked {
                        background-color: #738b69;
                        border-color: #738b69;
                    }

                    &:checked::after {
                        content: "✓";
                        color: white;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
            }

            button {
                padding: 0.5rem 1.85rem;
                display: inline-flex;
                justify-content: center;
                background: #738b69;
                width: fit-content;
                color: #fff;
                border: 1px solid #fff;
                border-radius: 0;
                padding: 0.45rem 2rem;
                font-family: "Plus Jakarta Sans", sans-serif;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
                position: relative;
                text-decoration: none !important;
                box-shadow: none !important;
                z-index: 0;
                overflow: hidden;
                transition: all 0.3s;
                cursor: pointer;
            }
        }
    }
`;

export default Wrapper;
