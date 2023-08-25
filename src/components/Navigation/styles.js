// import { NavHashLink as Link } from 'react-router-hash-link'

import styled from 'styled-components'

import { Colors } from '../../styles/constants'

export const Container = styled.div`
    background: #fefefe;
    z-index: 999;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: fixed;
    top: 0;
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

    a.selected {
        color: blue;
    }
`

export const HomeLink = styled.p`
    font-size: 1rem;
    cursor: pointer;
    color: ${(props) =>
        props.changeHomeLink ? `${Colors.green}` : `${Colors.text}`};
    transition: 0.5s;
`

// export const StyledLink = styled(Link)``
