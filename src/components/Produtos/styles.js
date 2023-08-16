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

export const Text = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    div {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`
