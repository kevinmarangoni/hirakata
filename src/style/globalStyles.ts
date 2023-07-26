import { createGlobalStyle } from "styled-components";
import { IGlobalStyleProps } from '@/types/theme'

const globalStyle = createGlobalStyle<IGlobalStyleProps>`

    *{
        padding: 0;
        margin: 0;
        font-family: 'Doboto', sans-serif;
        color: ${props=> props.theme.font}
    }

    html{
        background-color: ${props=> props.theme.background.primary};
    }

`

export default globalStyle