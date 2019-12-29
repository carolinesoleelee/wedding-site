import React from 'react';
import styled, { css } from 'styled-components';

const HamburgerMenu = props => {
  return (
    <ModalContainer active={props.active}>
      <ModalContent>
        <ModalHeader>
          <StyledHeaderInd>Take me to...</StyledHeaderInd>
        </ModalHeader>

        <Test>
          <StyledContentInd key="" href="/rsvp">
            RSVP
          </StyledContentInd>
          <StyledContentInd key="" href="">
            Our Story
          </StyledContentInd>
          <StyledContentInd key="" href="/wedding-party">
            Wedding Party
          </StyledContentInd>
          <StyledContentInd key="" href="">
            FAQ
          </StyledContentInd>
          <StyledContentInd key="" href="/">
            Back to Home
          </StyledContentInd>
        </Test>
      </ModalContent>
    </ModalContainer>
  );
};
export default HamburgerMenu;

const ModalContainer = styled.div`
  display: block;
  height: 100%;
  position: fixed;
  width: 100%;
  background-color: white;
  text-align: center;
  z-index: 2;
  transform: translateY(-110%);
  transition: transform 0.3s ease-in-out;
  ${({ active }) =>
    active &&
    css`
      transform: translateY(0);
    `}
`;

const ModalContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  top: 0px;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 35px 0px;
`;
const StyledHeaderInd = styled.div`
  margin: 1px;
  text-transform: uppercase;
  padding: 0px 8px;
  line-height: 4em;
  color: #6f737d;
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: color 0.2s linear 0s;
`;

const Test = styled.div`
  display: grid;
`;

const StyledContentInd = styled.a`
  margin: 0px;
  padding: 0px 0px;
  line-height: 135px;
  color: #6f737d;
  border-top: 1px solid rgba(67, 69, 77, 0.1);
  font-size: 35px;
  font-family: Canela-thin;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.5s linear 0s, background-color 0.4s ease-in-out 0s;

  &:hover {
    background-color: #b9a277c4;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
`;
