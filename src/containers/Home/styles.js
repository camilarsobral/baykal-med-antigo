import styled from 'styled-components'

import BackgroundImage from '../../assets/exemplo3.jpg'
import { Colors } from '../../styles/constants'

export const Background = styled.div`
    background: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    height: 90vh;
    width: 100%;
    margin-top: 10vh;

    &::before {
        content: '';
        position: absolute;
        top: 10vh;
        right: 0;
        width: 100%;
        height: 90vh;
        background-color: rgba(255, 255, 255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    gap: 200px;
    padding-top: 100px;
`
export const Header = styled.div`
    max-width: 450px;
    height: 200px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        color: ${Colors.orange};
        font-weight: 900;
        font-size: 2.5rem;
        font-family: 'Poppins', sans-serif;
        line-height: 3rem;
    }

    p {
        font-weight: 400;
    }
`

export const Text = styled.div`
    max-width: 450px;
    height: 200px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    p {
        font-size: 1.2rem;
    }

    a {
        background-color: ${Colors.orange};
        padding: 10px 20px;
        border-radius: 20px;
        color: ${Colors.white};
        text-decoration: none;
    }
`
