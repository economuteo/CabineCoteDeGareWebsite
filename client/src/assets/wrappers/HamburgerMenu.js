import styled from "styled-components";

const Wrapper = styled.div`
    .hamburger-menu {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    /* full screen overlay shown when sidebar is open */
    .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1000;
    }
`;

export default Wrapper;
