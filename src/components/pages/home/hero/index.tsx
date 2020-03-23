import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import { ChasingDots } from 'styled-spinkit'
import { MainContainer } from '../../../../styles/bases'
import { Margin } from '../../../../styles/utils'
import { Row, Col, Progress, Button, ShowModal } from '../../../lib'
import { AppPath } from '../../../../constant/appPath'
import { getDeployedFromConfig } from '../../../../utils/getDeployed'
import { prepBigNumber } from '../../../../utils/web3Utils'
import { getTokenDetailsFromAddress } from '../../../../utils/paymentToken'
import { formatBN } from '../../../../utils/formatters'
import {
    getMinimumRepayment,
    getRepaymentStart,
} from '../../../../utils/metadata'
import PatternImage from '../../../../images/pattern.png'
import contractAddresses from '../../../../config/router'
import {
    MILLISECONDS,
    MONTHS_IN_YEAR,
    ZERO,
} from '../../../../config/constants'

import {
    HeroWrapper,
    HeroCell,
    HeroButtonLendMobile,
    HeroLink,
    HeroStats,
    HeroImage,
    HeroVideo,
    HeroStatsRight,
} from './styled'

interface HomeHeroProps extends RouteComponentProps<any> {
    loanPeriod: string
    interestRate: string
    contributors: object[]
    loanMetadata: object
}

export interface HomeHeroState {
    showModal: boolean
    loaded: boolean
}

class HomeHero extends React.Component<HomeHeroProps, HomeHeroState> {
    constructor(props: HomeHeroProps) {
        super(props)
        this.state = {
            showModal: false,
            loaded: false,
        }
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount = async () => {
        // Get the contract instances for Ines (We'll just bake these in for now).
        try {
            this.setState({
                loaded: true,
                showModal: true,
            })
        } catch (err) {
            console.error(err)
        }
    }

    handleModal() {
        const { showModal } = this.state
        this.setState({
            showModal: !showModal,
        })
    }

    render() {
        const {} = this.props
        return (
            <HeroWrapper>
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        left: 0,
                        transform: 'scaleX(-1)',
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        right: 0,
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                <MainContainer>
                    <HeroCell>
                        <Row>
                            <Col lg={7} md={12} sm={12} text="center">
                                <HeroImage>
                                    <HeroLink>
                                        <HeroVideo>
                                            <YoutubeEmbed youtubeId="s7oGAs4AkJg" />
                                        </HeroVideo>
                                    </HeroLink>
                                </HeroImage>
                            </Col>
                            <Col lg={5} md={12} sm={12}>
                                <b>
                                    <p style={{ color: '#6c6d7a' }}>
                                        INCOME SHARE AGREEMENT // EDUCATION
                                    </p>
                                </b>
                                <h2>
                                    Help me raise 60,000 Dai to attend Cornell
                                    University
                                </h2>
                                {this.state.loaded ? (
                                    <Margin top={32}>
                                        <HeroStats>
                                            <h5>
                                                {' Dai '}
                                                <small>of&nbsp; goal</small>
                                            </h5>
                                        </HeroStats>
                                        <HeroStatsRight>
                                            <p>1 Dai = 1 USD</p>
                                        </HeroStatsRight>
                                    </Margin>
                                ) : (
                                    <Margin top={32}>
                                        <ChasingDots />
                                    </Margin>
                                )}
                                {this.state.loaded && <div>ouuiuio</div>}
                                <Margin top={24}>
                                    {this.state.loaded && (
                                        <Row>
                                            <Col lg={2} sm={6}>
                                                <HeroStats
                                                    data-for="isa-tooltip"
                                                    data-tip="Income Share Agreement (ISA) will be <br> distributed proportionally <br> by the amount of investment"
                                                    data-multiline="true"
                                                >
                                                    <h4>%</h4>
                                                    <p>
                                                        ISA{' '}
                                                        <FontAwesomeIcon
                                                            icon={faInfoCircle}
                                                        />
                                                    </p>
                                                </HeroStats>
                                                <ReactTooltip id="isa-tooltip" />
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <HeroStats>
                                                    <h4>yr.</h4>
                                                    <p>Duration</p>
                                                </HeroStats>
                                            </Col>
                                            <Col lg={4} sm={6}>
                                                <HeroStats
                                                    data-for="minRepayment-tooltip"
                                                    data-tip="The minimum amount the borrower <br> is committed to repay <br> regardless of income"
                                                    data-multiline="true"
                                                >
                                                    <h4>Dai</h4>
                                                    <p>
                                                        Min Repayment{' '}
                                                        <FontAwesomeIcon
                                                            icon={faInfoCircle}
                                                        />
                                                    </p>
                                                </HeroStats>
                                                <ReactTooltip id="minRepayment-tooltip" />
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <HeroStats>
                                                    <h4>iouop</h4>
                                                    <p>ISA Start</p>
                                                </HeroStats>
                                            </Col>
                                        </Row>
                                    )}
                                    <p style={{ color: '#6c6d7a' }}>
                                        <small>
                                            Income Share Agreement (ISA) is
                                            monthly percentage of
                                            post-graduation income that will be
                                            shared to investors proportionally
                                            by the amount of contribution within
                                            the duration or until cap is reached
                                        </small>
                                    </p>
                                </Margin>
                                <Margin top={16}>
                                    <Row>
                                        <Col lg={6} md={12} sm={12}>
                                            <Button
                                                color="green"
                                                onClick={() => {}}
                                            >
                                                Invest Now
                                            </Button>
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            <Button
                                                color="green"
                                                outline
                                                onClick={() =>
                                                    window.open(
                                                        'https://calendly.com/inesfund/video-interview'
                                                    )
                                                }
                                            >
                                                Video Interview
                                            </Button>
                                        </Col>
                                    </Row>
                                </Margin>
                                <HeroButtonLendMobile>
                                    <Button color="green" onClick={() => {}}>
                                        Invest Now
                                    </Button>
                                </HeroButtonLendMobile>
                            </Col>
                        </Row>
                    </HeroCell>
                </MainContainer>
            </HeroWrapper>
        )
    }
}

export default withRouter<HomeHeroProps>(HomeHero)
