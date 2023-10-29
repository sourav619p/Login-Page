import styled from "styled-components"

export default function Button({content}){
    return(
        <StyledButton>
            {content}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0.68);
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    color: #394d40;
    border: none;
    font-size: 1vw;
    font-weight: bolder;
    border-radius: 2rem;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.68);
        color: rgba(255, 255, 255, 0.68);
    }
    @media only screen and (max-width:1000PX) {
        font-size: 4vw;
    }
`