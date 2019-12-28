import React from 'react';
import styled, {css} from 'styled-components';

const ModalContainer = styled.div`
  display: block;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  z-index: 2;
  transform: translateY(-110%);
  transition: transform 0.3s ease-in-out;
  ${({active}) =>
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
const StyledHeaderInd = styled.a`
  margin: 1px;
  text-transform: uppercase;
  padding: 0px 8px;
  line-height: 4em;
  color: rgb(87, 89, 95);
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
  line-height: 155px;
  color: rgb(87, 89, 95);
  border-top: 1px solid rgba(67, 69, 77, 0.1);
  font-size: 45px;
  font-family: soleil, 1sans-serif;
  letter-spacing: -2px;
  font-weight: bold;
  transition: color 0.1s linear 0s, background-color 0.3s ease-in-out 0s;

  &:hover {
    background-color: grey;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
`;

const HamburgerMenu = props => {
  return (
    <ModalContainer active={props.active}>
      <ModalContent>
        <ModalHeader>

            <StyledHeaderInd key="" href="">
whats this
            </StyledHeaderInd>
        </ModalHeader>


        <Test>
            <StyledContentInd key="" href="">
hello
            </StyledContentInd>
        </Test>
      </ModalContent>
    </ModalContainer>
  );
};
export default HamburgerMenu;
