export interface DropdownProps {
    placeholder?: string
    label?: string
    id?: string
    name?: string
    autoFocus?: boolean
    error?: string
    touched?: boolean
    value?: string | number
    options?: (string | number)[]
    onChange?: any
    onChangeCustom?: any
}

export interface WrapperProps {
    placeholder?: string
    label?: string
    id?: string
    name?: string
    autoFocus?: boolean
    error?: string
    touched?: boolean
    value?: string | number
    onChange?: any
    onChangeCustom?: any
}
