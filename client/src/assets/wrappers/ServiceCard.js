import styled from "styled-components";

const Wrapper = styled.div`
    .card-image {
        height: 535px;
        width: 100%;
        overflow: hidden;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.3s;
    }

    img:hover {
        transform: scale(1.1);
    }

    .title {
        padding-bottom: 0.25rem;
        margin-top: 32px;
        margin-bottom: 5px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        align-items: start;
        justify-content: start;
        position: relative;
        text-transform: uppercase;
        font-family: "Playfair", serif;
        font-weight: 400;
        font-size: 1.7rem;
    }

    .description {
        text-transform: uppercase;
        margin-top: 8px;
        color: #738b69 !important;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 700 !important;
    }
`;

export default Wrapper;
