import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;

    /* Responsiveness */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        position: relative;
        color: inherit;
        text-decoration: none;
    }

    .content {
        position: relative;
        width: 100%;
        max-height: unset !important;
        height: 100vh !important;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            position: absolute;
            width: 100% !important;
            height: 100%;
            object-fit: cover;
            object-position: center;
            inset: 0;
            z-index: 0;
        }

        .content-description {
            position: absolute;
            padding: 20px 0px;
            bottom: 45px;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;

            .banner-title {
                font-size: 4.5rem;
                font-weight: 700;
                line-height: 1.05;
                color: #ffff;
                margin-top: 48px;
                margin-bottom: 24px;
                text-align: center;
                text-shadow: 0 0 10px #ffffff70;
                text-transform: uppercase;
                font-family: "Playfair", serif;
            }

            @media only screen and (max-width: 1490px) {
                .banner-title {
                    font-size: 3.5rem;
                }
            }

            @media only screen and (max-width: 990px) {
                .banner-title {
                    font-size: 3rem;
                }
            }

            @media only screen and (max-width: 576px) {
                .banner-title {
                    font-size: 2.5rem;
                }
            }

            @media only screen and (max-width: 480px) {
                .banner-title {
                    font-size: 1.65rem;
                }
            }

            .buttons {
                display: flex;
                align-items: center;
                gap: 8px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }

            .appointment-button {
                display: inline-flex;
                justify-content: center;
                background: #738b69;
                width: fit-content;
                color: #fff;
                border: 1px solid #fff;
                border-radius: 0;
                padding: 0.45rem 2rem;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
                position: relative;
                text-decoration: none !important;
                box-shadow: none !important;
                z-index: 0;
                overflow: hidden;
                transition: all 0.3s;

                a {
                    padding-right: 0px;
                }
            }

            .read-more-button {
                display: inline-flex;
                justify-content: center;
                background: white;
                width: fit-content;
                color: #738b69;
                border: 1px solid #fff;
                border-radius: 0;
                padding: 0.45rem 2rem;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
                position: relative;
                text-decoration: none !important;
                box-shadow: none !important;
                z-index: 0;
                overflow: hidden;
                transition: all 0.3s;

                a {
                    padding-right: 0px;
                }
            }
        }
    }

    .content-2 {
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 1000px;

        @media only screen and (max-width: 1300px) {
            flex-direction: column;
            height: auto;
        }

        img {
            max-width: 100%;
            object-fit: cover;
            width: 100%;
            height: auto;
            min-height: 100%;
        }

        .content-2-first {
            width: 30%;
            height: inherit;
            order: 1;

            @media only screen and (max-width: 1300px) {
                width: 100%;
                order: 2;
            }
        }

        .content-2-second {
            width: 30%;
            height: 100%;
            order: 3;

            @media only screen and (max-width: 1300px) {
                order: 3;
                width: 100%;
            }
        }

        .content-2-description {
            order: 2;
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            padding: 48px;
            background-color: #414141;
            color: #ffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            @media only screen and (max-width: 1300px) {
                width: 100%;
                order: 1;
            }

            .title {
                position: relative;
                padding-bottom: 10px;
                margin-bottom: 10px;
                color: #738b69 !important;
                font-family: "Playfair", serif;
                font-size: 3.3rem;
                font-weight: 500;
                margin: 0 0 15px 0;
                line-height: 1.2;

                @media only screen and (max-width: 1490px) {
                    font-size: 2.5rem;
                }

                @media only screen and (max-width: 990px) {
                    font-size: 2.3rem;
                }

                @media only screen and (max-width: 576px) {
                    font-size: 2rem;
                }

                &::after {
                    position: absolute;
                    content: "";
                    width: 45px;
                    height: 2px;
                    background-color: #fff;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
            }

            .home-3 {
                margin-bottom: 15px;
                margin: 0 0 15px 0;
                line-height: 1.2;
                position: relative;
                font-family: "Playfair", serif;
                font-weight: 700 !important;
                font-size: calc(1.275rem + 0.3vw) !important;

                @media only screen and (min-width: 1200px) {
                    font-size: 1.5rem !important;
                }
            }

            .home-4 {
                margin-bottom: 15px;
                font-size: 1.1rem;
                font-family: "Playfair", serif;
            }

            .home-5 {
                margin-bottom: 16px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }

            .home-6 {
                margin-bottom: 16px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }

            .home-7 {
                font-size: calc(1.275rem + 0.3vw) !important;
                font-family: "Playfair", serif;
                margin-bottom: 15px;

                @media only screen and (min-width: 1200px) {
                    font-size: 1.5rem !important;
                }
            }

            .home-8 {
                margin-bottom: 16px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }

            .home-9 {
                margin-bottom: 16px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }

            .home-10 {
                font-weight: 700 !important;
                margin-bottom: 16px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }

            .appointment-button {
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

                a {
                    padding-right: 0px;
                }
            }
        }

        #secondPhoto {
        }
    }

    .introduction {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: introduction;
    }

    .splash-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 382px;
        img {
            max-width: 382px;
            object-fit: cover;
        }
    }

    .splash-container {
        position: absolute;
        top: -5%;
        left: 0%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export default Wrapper;
