import styled from 'styled-components'

export const StyledForks = styled.a`
    font-size: 12px;
    color: #8b949e;
    box-sizing: border-box;
    &:hover {
        color: #0366d6;
    }

    &:hover svg {
        fill: #0366d6 !important;
    }

    & span {
        display: inline-flex;
        align-items: center;
    }
`
