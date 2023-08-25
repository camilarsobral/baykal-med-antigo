import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    height: 90vh;
    z-index: 999999;
    width: 100%;

    a {
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
    }
`
export const Image = styled.img`
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 50px;
`
