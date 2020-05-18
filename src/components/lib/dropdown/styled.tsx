import styled, { css } from 'styled-components'
import { WrapperProps } from './interface'

const DropdownWrapper = styled.select<WrapperProps>`
    padding: 16px;
    outline: none;
    border-radius: 2px;
    border: 0px;
    background-color: transparent;
    min-height: 38px;
    font-size: 14px;
    width: 100%;
    transition: all ease-in-out 0.4s;
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

const InputLabel = styled.label`
    display: block;
    margin-bottom: 16px;
    font-size: 16px;
`

export { DropdownWrapper, DropdownOption, InputLabel }
