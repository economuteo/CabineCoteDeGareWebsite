import styled from "styled-components";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .form-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .row {
        display: flex;
        gap: 1rem;

        @media only screen and (max-width: 576px) {
            flex-direction: column;
        }
    }

    .col {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        &#agreement {
            flex: unset;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-top: 0.5rem;

            input {
                margin-top: 0.25rem;
                flex-shrink: 0;
            }

            span {
                line-height: 1.5;
            }
        }
    }

    .form-control {
        padding: 0.75rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 0.95rem;
        transition: border-color 0.2s;

        &:focus {
            outline: none;
            border-color: #738b69;
            box-shadow: 0 0 0 2px rgba(115, 139, 105, 0.1);
        }

        &.valid {
            border-color: #ccc;
        }
    }

    .text-danger {
        color: #dc3545;
        font-size: 0.85rem;
        display: block;
    }

    #checkbox {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }

    .white-txt {
        color: #738b69;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .text-decoration-underline {
        text-decoration: underline;
    }

    .btn-primary {
        padding: 0.75rem 2rem;
        background: #738b69;
        color: white;
        border: 1px solid #738b69;
        border-radius: 4px;
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 0.95rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.01em;
        cursor: pointer;
        transition: all 0.25s ease;
        width: fit-content;

        &:hover {
            background: #5d7256;
            border-color: #5d7256;
            transform: translateY(-1px);
        }
    }
`;

export default Wrapper;
