import styled from 'styled-components'

import { Colors } from '../../styles/constants'

export const Container = styled.div`
    width: 100%;
    padding: 100px;

    h1 {
        color: ${Colors.orange};
    }
`

export const ContainerItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
    margin-top: 50px;
`

export const LeftContainer = styled.div`
    max-width: 35vw;
    text-align: justify;

    p {
        font-size: 1.1rem;

        span {
            font-weight: 700;
        }
    }
`
export const RightContainer = styled.div`
    max-width: 35vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Image = styled.img`
    width: 40px;
`

export const TopContainer = styled.div`
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;

        p {
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }
`

export const BottomContainer = styled.div`
    div {
        margin-top: 20px;

        p {
            text-align: justify;
        }
    }
`
