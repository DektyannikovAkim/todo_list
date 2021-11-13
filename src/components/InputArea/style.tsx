import styled from "styled-components";

export const wrapperForForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const formCreateTodo = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 245px;
  border: 1px solid #0a0a0a;
`;

export const inputForCreateTodo = styled.input`
  outline: none;
`;

export const submit = styled.button`
  background-color: inherit;
  color: #ff9121;
  border: none;
`;

export const wrapperForTodo = styled.div `
display: flex;
justify-content: space-between;
align-items: flex-start;
border-bottom: 1px solid #0A0A0A;
padding: 10px 10px;

:first-child {
    border-top: 1px solid #0A0A0A;
}`

export const elementWrapper = styled.div`
padding: 0px 10px;
`
