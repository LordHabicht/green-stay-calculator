import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
import { Header } from '../components/Header';
import { ResultComponent } from '../components/ResultComponent';
import TextField from '@mui/material/TextField';

const StyledButton = styled.button`
    background-color: #0041a3;
    color: #fff;
    border-radius: 6px;
    border:none;
    display: inline-block;
    margin-left: 1em;
    padding: 12px 20px 12px 20px;
    transform: translateY(7px);
    &:hover {
        background-color: #0041a380;
        cursor: pointer; 
    }
`

const StyledTextField = styled(TextField)`
    display:inline-block;
`

const StyledLink = styled(Link)`
    margin-left: -47px;
`

const Label = styled.p`
    text-align: center;
`

const FatLabel = styled(Label)`
    font-weight: 700;
`

const Footer = styled.div`
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const TextFieldWrapper = styled.div`
    width:320px;
    display: inline-block;
`
const TextWrapper = styled.div`
    line-height: .8;
    margin-top: 2.5em;
    margin-bottom: 1em;
`
const Spacer = styled.div`
    height: 5em;
`

type PageProps = {
    id: number;
}


export const ResultPage: FC<PageProps> = ({ id }): ReactElement => {

    const buttonClicked = () => {
        alert("An E-Mail has been sent.");
    }

    return (
        <div>
            <StyledLink to="/">back</StyledLink>
            <Header />
            <ResultComponent />
            <TextWrapper>
                <Label>Get more information on the CO2 balance of your hotel stay via e-mail.</Label>
                <FatLabel>Type in your e-mail for more information</FatLabel>
            </TextWrapper>
            <Footer>
                <TextFieldWrapper>
                    <StyledTextField id="outlined-basic" label="e-mail" variant="outlined" size="small" fullWidth />
                </TextFieldWrapper>
                <StyledButton onClick={() => buttonClicked()}>Confirm</StyledButton>
            </Footer>
            <Spacer />
        </div>
    )
};