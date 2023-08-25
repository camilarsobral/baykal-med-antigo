import styled from 'styled-components'

import { Colors } from '../../styles/constants'

export const Container = styled.div`
    background-color: ${Colors.grey};
    width: 100%;
    padding: 100px;
    border-radius: 40px;

    h1 {
        color: ${Colors.green};
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
        gap: 5px;
    }
`
