import styled from 'styled-components'

export const StyledHeader = styled.div``

export const StyledFullName = styled.a`
    font-size: 20px;
    line-height: 25px;
    box-sizing: border-box;
    &:hover {
        text-decoration: underline;
    }
    color: #58a6ff;
    & span {
        word-break: break-word;
    }
`

export const StyledStarButton = styled.button`
    background-color: #21262c !important;
    color: #c9d1d9;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid rgb(54 59 65);
    &:hover {
        background-color: #f5f8fa;
    }
    & span {
        display: inline-flex;
        align-items: center;
    }
`
