import styled from 'styled-components'
import { MaxWidth } from '../../../../styles/utils'
import { TextField } from '../../../lib'

const AmountFieldsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    columns: 2;
`
const AmountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    columns: 2;
`
const AmountTextField = styled(TextField)`
    display: flex;
    flex-direction: row;
    columns: 2;
    border: 1px solid black;
    border-left-width: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
`

const HeroContent = styled.div`
    background-color: white;
    padding: 50px;
    position: relative;
    height: auto;
    display: block;
    margin-bottom: 20px;
`

const BoxStats = styled.div`
    background-color: #272b90;
    color: white;
    padding: 24px 30px;
`

const TableCard = styled.div`
    background-color: white;
    border-top: 2px solid #e7ebf2;
    padding: 16px;
    transition: all ease-in-out 0.4s;
    ${MaxWidth.sm`
    padding-top: 20px;
  `}
    &:last-child {
        background-color: #f7f7f7;
        color: black;
    }
`

const TableInline = styled.div`
    width: calc(100% / 3);
    display: inline-block;
    vertical-align: top;
    p {
        margin-bottom: 0;
    }
    &:last-child {
        text-align: right;
    }
    ${MaxWidth.sm`
    width: 100%;
    margin-bottom: 8px;
    &:last-child {
      text-align: left;
    }
  `}
`

const TableTitleWrapper = styled.div`
    padding: 16px;
    color: #6c6d7a;
    border-bottom: 2px solid #e7ebf2;
`

const TableTitle = styled.div`
    width: calc(100% / 3);
    display: inline-block;
    vertical-align: top;
    text-transform: uppercase;
    &:last-child {
        text-align: right;
    }
`

const FormTitleWrapper = styled.div`
    padding: 40px 0;
    text-align: center;
`

const FormTitle = styled.h4`
    vertical-align: top;
    text-transform: uppercase;
`

const FormWrapper = styled.div`
    width: calc(100% / 2);
    margin: 0 auto;
    display: block;
    vertical-align: top;
    &:last-child {
        text-align: right;
    }
`

const TableTitleMobile = styled.small`
    display: none;
    ${MaxWidth.sm`
    display: block;
    font-weight: 600;
  `}
`

const BoldDetails = styled.b`
    float: right;
`

const WebViewH5 = styled.h5`
    ${MaxWidth.xs`
    display: none
  `}
`

const InputLabel = styled.label`
    display: block;
    margin-bottom: 16px;
    font-size: 16px;
`

export {
    AmountFieldsWrapper,
    AmountWrapper,
    AmountTextField,
    BoldDetails,
    HeroContent,
    BoxStats,
    TableCard,
    TableInline,
    TableTitleWrapper,
    TableTitle,
    TableTitleMobile,
    FormTitle,
    FormTitleWrapper,
    FormWrapper,
    InputLabel,
    WebViewH5,
}
