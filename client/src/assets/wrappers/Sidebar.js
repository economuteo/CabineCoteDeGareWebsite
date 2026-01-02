import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    max-width: 375px;
    height: 100vh;
    padding: 15px;
    background-color: white;
    z-index: 1001;
    font-size: var(--font-size-sm);

    .nav-item {
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .navbar-nav {
        position: relative;
    }

    .menu-header {
        padding-bottom: 10px;
        border-bottom: 2px solid #e7e7e7;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu-logo {
        img {
            width: 50px;
            height: 50px;
        }
    }

    #closeButton {
        width: 16px;
        height: 16px;
        cursor: pointer;
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
`;

export default Wrapper;
