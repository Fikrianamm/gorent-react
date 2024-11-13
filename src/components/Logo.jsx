import styled from "styled-components"

const LogoImg = styled.img`
    @media screen and (min-width: 768px) {
        width: 120px;
    }
    @media screen and (min-width: 1280px) {
        width: 200px;
    }
`

export default function Logo() {
  return (
    <>
     <LogoImg
          className="img-fluid me-3"
          src="/assets/images/GoRent.png"
          alt="logo GoRent"
        /> 
    </>
  )
}
