import styled from 'styled-components'

import { Colors } from '../../styles/constants'

export const Container = styled.div`
    background-color: ${Colors.grey};
    width: 100%;
    padding: 100px;
    border-radius: 40px;

    h1 {
        color: ${Colors.green};
        margin-bottom: 50px;
    }
`

export const ContainerItems = styled.div`
    width: 60vw;
    margin: 0 auto;
`
