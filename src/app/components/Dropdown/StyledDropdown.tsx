import styled, { css } from 'styled-components'

// Label for Dropdown Component
export const StyledDropdownLabel = styled.div`
    color: #8b959e;
    &:hover {
        color: #fafbfc;
    }
    &:after {
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: -2px;
        content: '';
        border: 4px solid transparent;
        border-top-color: currentcolor;
    }
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    box-sizing: border-box;
    z-index: 100px;
`
// Dropdown container
export const StyledDropdown = styled.div`
    width: 300px;
    position: absolute;
    ${window.innerWidth > 768 &&
    css`
        right: 0;
    `};
    border: 1px solid #1b2027 !important;
    z-index: 100;
`
// Header of Dropdown component(title and input filter)
export const StyledDropdownHeader = styled.div`
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid #1b2027;
    padding: 8px 10px;
    box-sizing: border-box;
    background: #161b22;
    color: #c9d1d9;
`
// Body of Dropdown component(list of options)
export const StyledDropdownBody = styled.div`
    font-size: 12px;
    box-sizing: border-box;
    background: #161b22;
    color: #c9d1d9;
`
// Container for SearchBox component
export const StyledDropdownSearchBox = styled.div`
    width: 300px;
    position: absolute;
    ${window.innerWidth > 768 &&
    css`
        right: 0;
    `};
    font-size: 12px;
    box-sizing: border-box;
    color: #c9d1d9;
    background: #161b22;
    border: 1px solid #1b2027;
    z-index: 100;
`
// Container for Dropdown list items
export const StyledDropdownList = styled.div`
    font-size: 12px;
    max-height: 400px;
    box-sizing: border-box;
    background: #161b22;
    color: #c9d1d9;
`
// Unselected item of Dropdown list
export const StyledDropdownListItem = styled.div`
    padding: 8px 8px 8px 30px;
    box-sizing: border-box;
    background: #161b22;
    color: #c9d1d9;
    &:hover {
        background-color: #1f6feb;
        color: white;
    }
    &:hover svg {
        fill: white !important;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #1b2027;
    }
`
// Selected item of Dropdown list
export const StyledDropdownSelectedListItem = styled.div`
    padding: 8px 10px;
    box-sizing: border-box;
    background: #161b22;
    color: #c9d1d9 !important;

    & svg {
        color: #c9d1d9 !important;
    }
    ${props =>
        props.color &&
        css`
            color: ${props.color};
        `};
    &:hover {
        background-color: #1f6feb;
        color: white;
    }
    &:hover svg {
        fill: white !important;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #1b2027;
    }
`
