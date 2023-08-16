import styled from 'styled-components'

import { Colors } from '../../styles/constants'

export const Container = styled.div`
    background: #fefefe;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
`
export const Image = styled.img`
    height: 8vh;
`

export const Menu = styled.ul`
    display: flex;
    gap: 60px;
`
export const Li = styled.li`
    font-size: 1rem;
    list-style: none;

    a {
        text-decoration: none;

        &:visited {
            color: ${Colors.text};
        }
    }
`
