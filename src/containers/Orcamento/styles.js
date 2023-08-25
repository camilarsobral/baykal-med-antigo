import styled from 'styled-components'

import { Colors } from '../../styles/constants'

export const Container = styled.div`
    background-color: ${Colors.offwhite};
    width: 100%;
    padding: 100px;
    border-radius: 40px;

    h1 {
        color: ${Colors.orange};
    }
`
export const Form = styled.form`
    margin-top: 50px;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
        display: none;
    }

    input {
        width: 50%;
        height: 30px;
        border: none;
        border-bottom: 1px solid ${Colors.text};
        font-family: 'Montserrat', sans-serif;
    }

    input.file {
        height: max-content;
        max-width: 100%;
        color: #444;
        background: #fff;
        border-radius: 50px;
        border: none;
        margin-top: 10px;

        &::file-selector-button {
            height: 40px;
            font-family: 'Montserrat', sans-serif;
            margin-right: 20px;
            border: 1px solid ${Colors.orange};
            background: ${Colors.offwhite};
            padding: 10px 20px;
            border-radius: 20px;
            color: ${Colors.text};
            cursor: pointer;
        }
    }

    input.submit {
        width: 130px;
        height: 40px;
        border: none;
        margin-top: 20px;
        background-color: ${Colors.orange};
        color: ${Colors.offwhite};
        border-radius: 20px;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
    }
`
