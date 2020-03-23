import React from 'react'
import { withNavbarAndFooter } from '../../hoc'
import HomeHero from './hero'
import ModalWip from './modalWip'
import { getDeployedFromConfig } from '../../../utils/getDeployed'
import contractAddresses from '../../../config/router'
import { getBlock } from '../../../utils/web3Utils'
import {
    fetchLoanMetadata,
    getExpectedSalary,
    getIncomeSharePercentage,
    getLoanPeriod,
} from '../../../utils/metadata'
import { ShowModal } from '../../lib'

export interface HomeState {
    loanPeriod: string
    interestRate: string
    contributors: any
    loanMetadata: object
}

class Home extends React.Component<{}, HomeState> {
    state = {
        loanPeriod: null,
        interestRate: null,
        contributors: [],
        loanMetadata: null,
    }

    componentDidMount = async () => {
        ShowModal(<ModalWip />)

        this.setState({
            loanPeriod: {},
            interestRate: {},
            contributors: {},
            loanMetadata: {},
        })
    }

    render() {
        return (
            <React.Fragment>
                <HomeHero
                    loanPeriod={this.state.loanPeriod}
                    interestRate={this.state.interestRate}
                    contributors={this.state.contributors}
                    loanMetadata={this.state.loanMetadata}
                />
            </React.Fragment>
        )
    }
}

export default withNavbarAndFooter(Home)
