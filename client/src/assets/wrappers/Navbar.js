import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;

    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 1000;
    color: var(--primary-50);
    font-family:
        Plus Jakarta Sans,
        sans-serif;
    font-weight: 500;

    &.scrolled {
        position: fixed;
        top: 0;
        background-color: #fff;

        .header {
            padding-top: 16px !important;
            padding-bottom: 8px !important;
        }

        .nav-logo {
            img {
                width: 90px;
            }

            @media only screen and (max-width: 1100px) {
                img {
                    width: 75px !important;
                }
            }
        }
    }

    a {
        position: relative;
        color: inherit;
        text-decoration: none;
    }

    nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0px;
        font-size: 14px;

        a {
            position: relative;
            padding-right: 30px;
            color: inherit;
            text-decoration: none;
        }

        .specialties-wrapper {
            position: relative;
            display: inline-block;
            white-space: normal;
        }

        .specialties-link {
            position: relative;
            display: flex;
            align-items: center;
            padding-right: 30px;
        }

        a:visited,
        a:focus,
        a:hover,
        a:active {
            color: inherit;
            text-decoration: none;
        }

        .dropdown-menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            background: rgba(115, 139, 105, 0.95);
            border-radius: 4px;
            min-width: 280px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            padding: 12px 0;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .dropdown-item {
            display: block;
            padding: 12px 20px;
            color: white;
            font-size: 14px;
            cursor: pointer;
            white-space: nowrap;
            transition: background-color 0.2s ease;
            text-decoration: none;

            &:visited,
            &:hover,
            &:active,
            &:focus {
                color: white;
                text-decoration: none;
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }

            &:first-child {
                padding-top: 12px;
            }

            &:last-child {
                padding-bottom: 12px;
            }
        }

        .nav-logo {
            display: inline-block;
            width: 130px;
            margin-left: 88px;
            margin-right: 88px;

            @media only screen and (max-width: 1490px) {
                img {
                    width: 95px !important;
                }
            }

            img {
                width: auto;
                position: absolute;
                top: -60px;
                left: 0;
                object-fit: contain;
            }

            a {
                padding-right: 0px;
            }
        }
    }

    .header {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .header-contact {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    .small-navbar {
        display: none;
    }

    .phoneNumber,
    .email {
        display: flex;
        align-items: center;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-normal);

        @media only screen and (max-width: 575px) {
            font-size: 12px;
        }

        a {
            display: flex;
            align-items: center;
        }

        #phoneImg {
            filter: brightness(0);
            margin-right: 4px;
        }

        #emailImg {
            filter: brightness(0);
            margin-right: 8px;

            @media only screen and (max-width: 575px) {
                display: none;
            }
        }

        #secondaryNumber {
            padding-left: 16px;
        }
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

    @media only screen and (min-width: 768px) {
        .align-icon {
            display: none;
        }
        .logo {
            display: block;
        }
        .nav-content {
            display: block;
        }
    }

    @media only screen and (max-width: 990px) {
        .small-navbar {
            display: flex;
            justify-content: space-between;
            padding-top: 12px;
            padding-bottom: 12px;

            #logo {
                width: 65px;
                height: 65px;
            }

            .right-side {
                display: flex;
                align-items: center;
                gap: 16px;

                @media only screen and (max-width: 575px) {
                    gap: 8px;
                }
            }

            .email {
                #emailAddress {
                    display: none;
                }
            }

            .hamburger-menu {
                width: 24px;
                height: 24px;
            }
        }

        .big-navbar {
            display: none;
        }

        .nav-logo {
            img {
                width: 95px;
                height: 95px;
            }
        }
    }
`;

export default Wrapper;
