import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero-section {
        width: 100%;
        height: 50vh;
        background: #f8f8f8;
        display: block;
        padding: 0;

        @media only screen and (max-width: 1490px) {
            height: 45vh;
        }

        @media only screen and (max-width: 990px) {
            height: 35vh;
        }

        @media only screen and (max-width: 768px) {
            min-height: 30vh;
        }
    }

    .hero-image {
        width: 100%;
        height: 50vh;
        max-height: 620px;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        @media only screen and (max-width: 1490px) {
            height: 45vh;
        }

        @media only screen and (max-width: 990px) {
            height: 35vh;
        }

        @media only screen and (max-width: 768px) {
            min-height: 30vh;
        }
    }

    .hero-content {
        flex: 1;
        padding: 0 40px;

        h1 {
            font-size: 56px;
            font-weight: 700;
            color: var(--primary-600);
            font-family: Playfair, serif;
            line-height: 1.2;
        }
    }

    .specialty-page {
        padding: 60px 0;

        p {
            font-size: 16px;
            line-height: 1.6;
            color: var(--primary-300);
            margin-bottom: 20px;
        }
    }

    .content-section {
        padding: 80px 0 100px;
        background: #ffffff;

        .content-badge {
            display: inline-block;
            padding: 0.55rem 1.35rem;
            border-radius: 999px;
            background: #dbe8d6;
            color: #3c7046;
            font-size: 0.95rem;
            font-weight: 600;
            letter-spacing: 0.01em;
            font-family: "Plus Jakarta Sans", sans-serif;
        }

        .content-title {
            margin: 18px 0 48px;
            line-height: 1.3;
            text-align: center;
            color: #1f1f1f;
            font-size: 3.3rem;
            font-weight: 600;
            font-family: Playfair, serif;

            @media only screen and (max-width: 576px) {
                font-size: 2rem;
            }

            @media only screen and (max-width: 990px) {
                font-size: 2.3rem;
            }

            @media only screen and (max-width: 1490px) {
                font-size: 2.5rem;
            }
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 40px;
            align-items: center;

            @media only screen and (max-width: 991px) {
                grid-template-columns: 1fr;
                gap: 32px;
            }
        }

        .content-image {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 18px 38px rgba(0, 0, 0, 0.08);

            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        .content-text {
            .main-text {
                margin-bottom: 15px;
                color: #004e1a;
                font-family: "Playfair", serif;
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0 0 15px 0;
                line-height: 1.2;
                position: relative;

                @media only screen and (max-width: 1490px) {
                    font-size: 1.4rem;
                }

                @media only screen and (max-width: 990px) {
                    font-size: 1.3rem;
                }
            }

            .normal-text {
                margin-bottom: 16px;
                color: #687d5f;
                line-height: 1.7;
                font-size: 16px;
                font-family: "Plus Jakarta Sans", sans-serif;
            }
        }
    }
`;

export default Wrapper;
