import React from 'react'
import { Form, Field } from 'react-final-form'
import { getDeployedFromConfig } from '../../../../utils/getDeployed'
import contractAddresses from '../../../../config/router'
import { getBlock } from '../../../../utils/web3Utils'
import {
    fetchLoanMetadata,
    getExpectedSalary,
    getIncomeSharePercentage,
    getLoanPeriod,
} from '../../../../utils/metadata'
import {
    AmountFieldsWrapper,
    AmountTextField,
    TableTitle,
    FormTitle,
    FormTitleWrapper,
    FormWrapper,
    InputLabel,
} from './styled'
import {
    Spinner,
    Row,
    Col,
    Dropdown,
    TextField,
    Checkbox,
    Button,
    FieldError,
    RowButton,
} from '../../../lib'
import createDecorator from 'final-form-focus'
import { Margin, Padding } from '../../../../styles/utils'

const focusOnErrors = createDecorator()
let txError: string
const transacting = false

export interface FormState {}

class FormPage extends React.Component<{}, FormState> {
    state = {
        currency: 'DAI',
    }

    componentDidMount = async () => {
        this.setState({})
    }

    render() {
        const { currency } = this.state

        return (
            <React.Fragment>
                <FormWrapper>
                    <Form
                        onSubmit={() => {}}
                        decorators={[focusOnErrors]}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Margin top={40}>
                                    <Field
                                        name="currency"
                                        type="text"
                                        // validate={mustBeNumber}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <InputLabel>
                                                    I want to distribute:
                                                </InputLabel>
                                                <AmountFieldsWrapper>
                                                    <Dropdown
                                                        placeholder=" -- "
                                                        autoFocus={true}
                                                        value={currency}
                                                        options={[
                                                            'DAI',
                                                            'USDT',
                                                        ]}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                currency:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }}
                                                        wrapperProps={{
                                                            style: {
                                                                borderTopRightRadius:
                                                                    '0px',
                                                                borderBottomRightRadius:
                                                                    '0px',
                                                            },
                                                        }}
                                                        // {...input}
                                                        {...meta}
                                                    />
                                                    <Field
                                                        name="amount"
                                                        type="number"
                                                        // validate={mustBeNumber}
                                                        render={({
                                                            input,
                                                            meta,
                                                        }) => (
                                                            <React.Fragment>
                                                                <AmountTextField
                                                                    placeholder="e.g. 100"
                                                                    autoFocus={
                                                                        true
                                                                    }
                                                                    value={700}
                                                                    onChange={() => {}}
                                                                    style={{
                                                                        textAlign:
                                                                            'right',
                                                                        paddingRight:
                                                                            '32px',
                                                                    }}
                                                                    // {...input}
                                                                    {...meta}
                                                                />
                                                                {meta.touched &&
                                                                    meta.error && (
                                                                        <FieldError>
                                                                            {
                                                                                meta.error
                                                                            }
                                                                        </FieldError>
                                                                    )}
                                                            </React.Fragment>
                                                        )}
                                                    />
                                                </AmountFieldsWrapper>
                                                {meta.touched && meta.error && (
                                                    <FieldError>
                                                        {meta.error}
                                                    </FieldError>
                                                )}
                                            </React.Fragment>
                                        )}
                                    />
                                </Margin>
                                <Margin top={32} bottom={32}>
                                    <Field
                                        name="name"
                                        validate={() => {}}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <InputLabel>to:</InputLabel>
                                                <TextField
                                                    placeholder="Enter your name"
                                                    autoFocus={true}
                                                    {...input}
                                                    {...meta}
                                                />
                                                {meta.touched && meta.error && (
                                                    <FieldError>
                                                        {meta.error}
                                                    </FieldError>
                                                )}
                                            </React.Fragment>
                                        )}
                                    />
                                </Margin>
                                <Row>
                                    <Col lg={12} md={12}>
                                        <Margin top={8}>
                                            {txError && (
                                                <Padding left={8}>
                                                    <Margin bottom={8}>
                                                        <FieldError>
                                                            {txError}
                                                        </FieldError>
                                                    </Margin>
                                                </Padding>
                                            )}
                                            <Button
                                                type="submit"
                                                color="green"
                                                disabled={transacting}
                                            >
                                                {transacting ? (
                                                    <Spinner size="20" />
                                                ) : (
                                                    'Send Tokens'
                                                )}
                                            </Button>
                                        </Margin>
                                    </Col>
                                </Row>
                            </form>
                        )}
                    />
                </FormWrapper>
            </React.Fragment>
        )
    }
}

export default FormPage
