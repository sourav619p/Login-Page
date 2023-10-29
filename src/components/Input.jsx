import styled from "styled-components"

export default function Input({type,placeholder}) {
  return <StyledInput type={type} placeholder={placeholder}/>
}

const StyledInput = styled.input`
      background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.68);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  margin: 0.25rem;
  border: 1px solid rgba(92, 99, 92, 0.68);
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1rem ;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.68);
    font-weight: 100;
    font-size: 1rem;
  } 
  @media only screen and (max-width:420PX) {
    &::placeholder {
    color: rgba(255, 255, 255, 0.68);
    font-weight: 100;
    font-size: 1rem;
  } 
  }
`