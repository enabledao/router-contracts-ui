import React from 'react'
import { DropdownProps } from './interface'
import { DropdownWrapper, DropdownOption, InputLabel } from './styled'

const Dropdown: React.FC<DropdownProps> = ({
    placeholder,
    label,
    autoFocus,
    id,
    options,
    onChangeCustom,
    ...props
}) => (
    <React.Fragment>
        {label && <InputLabel>{label}</InputLabel>}
        <DropdownWrapper
            {...props}
            id={id}
            autoFocus={autoFocus}
            name={props.name}
            onChange={(e, f, g) => {
                console.log(e, f, g)
                props.onChange(e)
                if (onChangeCustom) {
                    onChangeCustom(e)
                }
            }}
        >
            <DropdownOption value="">{placeholder}</DropdownOption>
            {options.map((option) => (
                <DropdownOption key={option} value={option}>
                    {option}
                </DropdownOption>
            ))}
        </DropdownWrapper>
    </React.Fragment>
)

export default Dropdown
