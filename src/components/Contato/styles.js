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
        border: none;
    }

    input.submit {
        width: 130px;
        height: 40px;
        border: none;
        background-color: ${Colors.orange};
        color: ${Colors.offwhite};
        border-radius: 20px;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`
