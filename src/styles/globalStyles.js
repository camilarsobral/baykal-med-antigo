import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
        width: 100%; /* isso que consertou a scrollbar*/
        outline: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        color: #424242;
/* font-family: 'Poppins', sans-serif; */
    }
`
