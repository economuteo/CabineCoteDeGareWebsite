import styled from "styled-components";

const Wrapper = styled.footer`
    padding-top: 48px;
    padding-bottom: 24px;
    width: 100%;
    background-color: #1b1c21;

    #logo {
        margin-bottom: 16px;
        margin-right: 48px;
        width: 100px;
        height: 100px;

        @media only screen and (max-width: 1199px) {
            flex-direction: column;
            margin-right: 0px;
        }
    }

    .footer-description {
        @media only screen and (min-width: 1200px) {
            padding-left: 48px;
            margin-right: 24px;
        }

        @media only screen and (max-width: 1199px) {
            text-align: center;
        }

        .green-text {
            color: #738b69 !important;
        }

        p {
            color: #fff !important;
            font-size: 1.5rem;
            font-family: "Playfair", serif;
            font-weight: bold;
            line-height: 1.5;
            text-transform: uppercase;
        }
    }

    .line {
        padding-bottom: 24px;

        hr {
            margin-top: 12px;
            margin-bottom: 12px;
            color: gray;
            border: 0;
            border-top: 1px solid;
            opacity: 0.25;
        }
    }

    .content-intro {
        display: flex;

        @media only screen and (max-width: 1199px) {
            flex-direction: column;
        }
    }

    .left-part {
        width: 60%;
        display: flex;
        align-items: center;

        @media only screen and (max-width: 1199px) {
            margin-bottom: 24px;
            width: 100%;
            flex-direction: column;
        }
    }

    .socials {
        width: 40%;
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            width: 22px;
            height: 22px;
        }

        @media only screen and (max-width: 1199px) {
            width: 100%;
            justify-content: center;
        }
    }

    nav {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 1199px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 37px;
        }

        .left-part-nav {
            width: 60%;
            display: flex;
            flex-wrap: wrap;
            gap: 48px;

            @media only screen and (max-width: 1199px) {
                width: 100%;
                justify-content: center;
            }
        }

        .right-part-nav {
            width: 40%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media only screen and (max-width: 1199px) {
                width: 100%;
                justify-content: center;
                gap: 32px;
            }
        }

        a {
            color: white;
            text-decoration: none;
            font-family: "Plus Jakarta Sans", sans-serif;
        }
    }
`;

export default Wrapper;
