import styled from "styled-components";

const Wrapper = styled.footer`
    padding-top: 48px;
    width: 100%;
    background-color: #1b1c21;

    #logo {
        margin-bottom: 16px;
        margin-right: 48px;
        width: 100px;
        height: 100px;
    }

    .footer-description {
        @media only screen and (min-width: 1200px) {
            padding-left: 48px;
            margin-right: 24px;
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

    .container {
        display: flex;
    }

    .socials {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            width: 22px;
            height: 22px;
        }
    }
`;

export default Wrapper;
