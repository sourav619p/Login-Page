import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <MainContainer>
      <HeaderText> Login</HeaderText>
      <InputContainer>
      <Input type="text" placeholder="Name" />
      <Input type="password" placeholder="password" />
      </InputContainer>
      <LinkContainer>
    <Links href="">Remember me</Links>
    <Links href="">Forgot Password?</Links>
      </LinkContainer>
      <ButtonContainer>
        <Button content="Login" />
      </ButtonContainer>
      <FooterLink>Don't have an account? <RegisterText>Register</RegisterText></FooterLink>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display : flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 26vw;
  background: rgba(255, 255, 255, 0.15);;
  box-shadow: 0 8px 32px 0 rgba(75, 77, 75, 0.68);
  backdrop-filter: blur(1.5px);
  border: 1px solid rgba(92, 99, 92, 0.68);
  border-radius: 10px;
  @media only screen and (max-width:1000PX) {
    width: 80vw;
    height: 63vh;
    h2{
      color: rgba(255, 255, 255, 0.68);
      font-size: 10vw;
    }
  }
`;

const HeaderText = styled.h2`
margin: 1rem 0  2rem 0;
color: rgba(255, 255, 255, 0.68);
font-size: 3vw;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
`
const LinkContainer = styled.div`
  height: 5vh;
  width: 26vw;
  margin: 2rem 0  0.5rem 0;
  padding: 0 3rem 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width:1000PX) {
    width: 80vw;
    height: 5vh;
    padding-bottom: 0.5vh;
    a{
  font-size: 3.5vw;
    }
  }
` 
const Links = styled.a`
  color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  font-size: 1vw;
`
const ButtonContainer = styled.div`
  margin: 0 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterLink = styled.a`
color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  font-size: 1vw;
  @media only screen and (max-width:1000PX) {
    font-size: 3vw;
    a{
  font-size: 3.5vw;
    }
  }
`
const RegisterText = styled.a`
  color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  font-size: 1vw;
  font-weight: 800;
  cursor: pointer;
`

export default App