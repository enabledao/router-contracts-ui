import React from 'react'
import { withNavbarAndFooter } from '../../hoc'
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

export interface HomeState {}

class Home extends React.Component<{}, HomeState> {
    state = {}

    componentDidMount = async () => {
        ShowModal(<ModalWip />)

        this.setState({})
    }

    render() {
        return <React.Fragment></React.Fragment>
    }
}

export default withNavbarAndFooter(Home)
