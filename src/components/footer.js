import React from 'react';
import styled from 'styled-components'

const footer = () => {
    return (
        <ContentContainer>
            <StyledHeader>
            Caroline & Chris     |     Saturday, March 7, 2020     |     6:00pm     |     The Great Room at Historic Savage Mill
            </StyledHeader>
        </ContentContainer>
    )
}

export default footer;

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    text-align: center;
    padding: 60px 0 30px;;
`

const StyledContainer = styled.div`
    background-color: white;
`


const StyledEyebrow = styled.p`
    font-size: 20px;
    font-weight: 100;
    color: black;
`

const StyledHeader = styled.h1`
    font-size: 27px;
    font-weight: 100;
    color: black;
    font-family: Canela-Thin;
`