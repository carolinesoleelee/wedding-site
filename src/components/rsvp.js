import React from 'react'
import styled from 'styled-components'
import { lessThan } from '../constants/mediaQ';

const registry = () => {
    return (
        <StyledContainer>
            <ContentContainer>
        <StyledHeader >We hope you’ll join us on this special day</StyledHeader > 

        <StyledButton href="/page-3">RSVP</StyledButton>
        </ContentContainer>
        </StyledContainer>
    )
}

export default registry;



const StyledContainer = styled.div`
    background-color: rgb(185, 162, 119);
    color: white;
`

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 700px;
    text-align: center;
    padding: 80px 0;
`

const StyledHeader = styled.h1`
    font-size: 60px;
    font-weight: 400;
    font-family: Canela-thin;
    line-height: 80px;


    ${lessThan.tablet} {
        font-size: 35px;
        line-height: 40px;
        margin-bottom: 50px;
    }
`

const StyledButton = styled.a`
    background-color: white;
    border-color: white;
    border-radius: 5px;
    padding: 17px 26px 13px;
    font-family: Calibre-Medium;
    letter-spacing: 3.5px;
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    color: black;
    opacity: 1;
    transition: opacity .10s ease-in-out;
-moz-transition: opacity .10s ease-in-out;
-webkit-transition: opacity .10s ease-in-out;

    &:hover {
        opacity: .75;
    }
`