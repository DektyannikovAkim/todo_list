import ContentEditable from "react-contenteditable";
import styled from "styled-components";

export const wrapperForTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #0a0a0a;
  padding: 10px 10px;

  :first-child {
    border-top: 1px solid #0a0a0a;
  }
`;

export const checkboxWrapper = styled.div`
  padding: 0px 10px;
`;

export const checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  :checked+label:after {
    background: #F4A505;
  `;

export const label = styled.label`
  position: relative;
  width: 21px;
  display: block;
  height: 21px;
  cursor: pointer;
  border: 2px solid #f4a505;
  border-radius: 100%;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transition: all 0.1s;
    transform: scale(0.8);
  `;

export const date = styled.span`
  opacity: 0.5;
  flex-shrink: 0;
  margin-left: 5px;
`;

export const close = styled.button`
  width: 25px;
  height: 25px;
  outline: none;
  display: inline-flex;
  line-height: 20px;
  border-radius: 100%;
  border: 2px solid #f4a505;
  color: #f4a505;
  margin-left: 15px;
  background-color: inherit;
  font-size: 16px;
`;

export const content = styled(ContentEditable)`
  margin: 0px;
  word-break: break-word;
  outline: none;
  flex-grow: 1;
  text-align: left;
  text-decoration: ${(props) =>
    props["aria-checked"] ? "line-through" : "none"};
`;
