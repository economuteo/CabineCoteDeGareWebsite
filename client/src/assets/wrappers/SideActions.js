import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    right: 0;
    bottom: 50vh;
    z-index: 5;

    font-family: "Plus Jakarta Sans", sans-serif;

    .whatsapp-btn {
        padding: 1.5rem 0.55rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: fit-content;
        background-color: #4cc75a;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.5;
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        width: 38px;
        cursor: pointer;
        z-index: 3;
    }

    a {
        text-decoration: none;
        color: #738b69;
        box-shadow: none;
        border: 0;
    }
`;

export default Wrapper;
