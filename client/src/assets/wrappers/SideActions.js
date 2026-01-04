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

    .nav-item.dropdown {
        position: relative;
    }

    .dropdown-menu {
        display: none;
        grid-template-columns: 1fr 1fr;
        position: absolute;
        top: 0;
        right: 100%;
        z-index: 4;
    }

    .dropdown-menu.show {
        display: grid;
    }

    .dropdown-item {
        padding: 7px;
        width: 38px;
        height: 38px;
        color: #fff !important;
        background: #738b69;
        font-weight: 600;
        font-size: 13px;
        justify-content: center;
        display: flex;
        align-items: center;
        transition: all 0.3s;
        cursor: pointer;
    }

    .dropdown-item:hover {
        background-color: #5a6c52;
    }
`;

export default Wrapper;
