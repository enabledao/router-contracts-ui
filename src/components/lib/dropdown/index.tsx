import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { DropdownProps } from './interface'
import { DropdownSelect, DropdownWrapper, DropdownOption } from './styled'

const DropdownIcon = () => <FontAwesomeIcon icon={faCaretDown} />
const Dropdown: React.FC<DropdownProps> = ({
    placeholder,
    autoFocus,
    id,
    options,
    onChangeCustom,
    wrapperProps,
    ...props
}) => (
    <React.Fragment>
        <DropdownWrapper {...wrapperProps}>
            <DropdownSelect
                {...props}
                id={id}
                autoFocus={autoFocus}
                name={props.name}
                onChange={(e) => {
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
            </DropdownSelect>
            <DropdownIcon />
        </DropdownWrapper>
    </React.Fragment>
)

export default Dropdown
