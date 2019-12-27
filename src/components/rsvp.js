import React from 'react'
import styled from 'styled-components'

const registry = () => {
    return (
        <StyledContainer>
            <ContentContainer>
        <StyledHeader >We hope you’ll join us on this special day</StyledHeader > 
        <button>RSVP</button>
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
`