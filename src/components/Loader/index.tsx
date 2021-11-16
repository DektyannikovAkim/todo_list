import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 66px;
  height: 17px;

  :after {
    content: " ";
    display: block;
    width: 14px;
    height: 14px;
    margin-left: 25px;
    border-radius: 50%;
    border: 2px solid  #ff9121;
    border-color: #ff9121 transparent #ff9121 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;