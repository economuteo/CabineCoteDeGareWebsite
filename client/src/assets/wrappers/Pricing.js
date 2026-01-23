import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #212529;
    font-size: 16px;
    background: #fff;

    .hero {
        position: relative;
        width: 100%;
        min-height: 15vh;

        @media only screen and (min-width: 991px) {
            height: 20vh;
        }
        /* display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        background-size: cover;
        background-position: center;
        overflow: hidden; */
    }

    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.35) 10%,
            rgba(255, 255, 255, 0.75) 80%
        );
    }

    .intro {
        margin-bottom: 50px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .hero-title {
        position: relative;
        z-index: 1;
        padding: 3rem 6vw 3rem;
        text-align: right;

        h1 {
            font-size: clamp(2.5rem, 3vw + 1rem, 3.4rem);
            color: #1f1f1f;
        }
    }

    .badge {
        background: #dbe8d6;
        color: #3c7046;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 0.95rem;
        padding: 0.55rem 1.35rem;
        border-radius: 999px;
        font-weight: 600;
        letter-spacing: 0.01em;
    }

    .page-heading {
        line-height: 1.2;
        font-size: 24px;
        font-weight: 500;
        font-family: "Playfair", serif;
        color: #004e1a;

        @media only screen and (max-width: 1500px) {
            font-size: 40px;
        }

        @media only screen and (max-width: 1500px) {
            font-size: 40px;
        }

        @media only screen and (max-width: 576px) {
            font-size: 32px;
        }
    }

    .two-column {
        margin-bottom: 120px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2.5rem;
        align-items: center;
    }

    .two-column.reverse {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .image-col img {
        width: 100%;
        height: 100%;
        max-height: 480px;
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    }

    .text-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .highlight {
        margin-bottom: 15px;
        position: relative;
        color: #1f6d3c;
        font-family: "Playfair", serif;
        font-weight: bold;
        line-height: 1.3;

        @media only screen and (max-width: 991px) {
            font-size: 1.25rem;
        }
    }

    .title-space {
        margin-bottom: 0.5rem;
        color: #003300;
        font-size: 48px;
    }

    .normal-text {
        font-family: "Plus Jakarta Sans", sans-serif;
    }

    .cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.75rem;
        margin-top: 0.5rem;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 0.95rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.01em;
        background: #738b69;
        color: #fff;
        border: 1px solid #738b69;
        text-decoration: none;
        transition: all 0.25s ease;
        width: fit-content;
    }

    .cta:hover {
        background: #5d7256;
        border-color: #5d7256;
        transform: translateY(-1px);
    }

    .price-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.5rem;
        padding: 1rem 0;
        border-bottom: 1px solid #ebebeb;
    }

    .item:last-of-type {
        border-bottom: none;
    }

    .item-title {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 700;
        color: #204b2f;
        margin-bottom: 0.25rem;
    }

    .item-desc {
        font-size: 0.98rem;
        color: #4b4b4b;
    }

    .item-price {
        white-space: nowrap;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 700;
        color: #2f2f2f;
    }

    @media (max-width: 768px) {
        .hero-title {
            text-align: left;
            padding: 2.25rem 6vw;
        }

        .item {
            flex-direction: column;
            align-items: flex-start;
        }

        .item-price {
            margin-top: 0.35rem;
        }
    }
`;

export default Wrapper;
