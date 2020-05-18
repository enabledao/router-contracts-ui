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
import { TableTitle, FormTitle, FormTitleWrapper, FormWrapper } from './styled'
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
        currency: '',
    }

    componentDidMount = async () => {
        this.setState({})
    }

    render() {
        const { currency } = this.state

        return (
            <React.Fragment>
                <FormTitleWrapper>
                    <FormTitle>Distribute funds</FormTitle>
                </FormTitleWrapper>
                <FormWrapper>
                    <Form
                        onSubmit={() => {}}
                        decorators={[focusOnErrors]}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <h5>I want to distribute:</h5>
                                <Margin top={40}>
                                    <h6>Investment Amount</h6>
                                    <Field
                                        name="currency"
                                        type="text"
                                        // validate={mustBeNumber}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <Dropdown
                                                    // label="Investment Amount"
                                                    placeholder="e.g. 100"
                                                    autoFocus={true}
                                                    value={currency}
                                                    options={[
                                                        'We',
                                                        'are',
                                                        'the',
                                                        'champion',
                                                    ]}
                                                    onChange={(currency) =>
                                                        this.setState({
                                                            currency,
                                                        })
                                                    }
                                                    // {...input}
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

                                    <Field
                                        name="amount"
                                        type="number"
                                        // validate={mustBeNumber}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <TextField
                                                    // label="Investment Amount"
                                                    placeholder="e.g. 100"
                                                    autoFocus={true}
                                                    value={700}
                                                    onChange={() => {}}
                                                    // {...input}
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
                                    <Margin top={5}>
                                        <small>Minimum 10 Dai</small>
                                    </Margin>
                                </Margin>
                                <Margin top={32} bottom={32}>
                                    <Field
                                        name="name"
                                        validate={() => {}}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <TextField
                                                    label="Name"
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
                                <Margin bottom={32}>
                                    <Field
                                        name="email"
                                        validate={() => {}}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <TextField
                                                    type="email"
                                                    label="Email"
                                                    placeholder="Enter your email"
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
                                <Margin top={24}>
                                    <b>
                                        <p>Disclaimers:</p>
                                    </b>
                                </Margin>
                                <Margin vertical={16}>
                                    <Field
                                        name="tac"
                                        type="checkbox"
                                        validate={() => {}}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <Checkbox
                                                    id="tac"
                                                    label="I have read the terms and conditions of this loan"
                                                    {...input}
                                                    {...meta}
                                                />
                                                {meta.touched && meta.error && (
                                                    <Padding left={24}>
                                                        <FieldError>
                                                            {meta.error}
                                                        </FieldError>
                                                    </Padding>
                                                )}
                                            </React.Fragment>
                                        )}
                                    />
                                </Margin>
                                <Margin vertical={16}>
                                    <Field
                                        name="risk"
                                        type="checkbox"
                                        validate={() => {}}
                                        render={({ input, meta }) => (
                                            <React.Fragment>
                                                <Checkbox
                                                    id="risk"
                                                    name="risk"
                                                    label="I acknowledge the risks of this experiment"
                                                    {...input}
                                                    {...meta}
                                                />
                                                {meta.touched && meta.error && (
                                                    <Padding left={24}>
                                                        <FieldError>
                                                            {meta.error}
                                                        </FieldError>
                                                    </Padding>
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
                                                    'Place my Investment'
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
