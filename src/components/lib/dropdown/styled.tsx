import styled, { css } from 'styled-components'
import { WrapperProps } from './interface'

const DropdownSelect = styled.select<WrapperProps>`
    flex: 1;
    padding: 16px 5px;
    outline: none;
    background-color: transparent;
    min-height: 38px;
    font-size: 14px;
    transition: all ease-in-out 0.4s;
    border 0;
    &:focus,
    &:active {
    }
    ${(props) =>
        props.error &&
        props.touched &&
        css`
            font-color: #b72814;
        `}
`

const DropdownWrapper = styled.div<any>`
    columns: 2;
    padding: 0 8px;
    flex-direction: row;
    display: flex;
    align-items: center;
    outline: none;
    border-radius: 2px;
    border: 1px solid black;
    min-height: 42px;
    &:focus,
    &:active {
        border: 1px solid #76bbe3;
    }
    ${(props) =>
        props.error &&
        props.touched &&
        css`
            border: 1px solid #b72814;
        `}
`
const DropdownOption = styled.option<any>`
    width: 100%;
    transition: all ease-in-out 0.4s;
`

export { DropdownWrapper, DropdownSelect, DropdownOption }
