import styled from "@emotion/styled";
import Logo from "../assets/Logo.svg";

const LogoSelf = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 101px;
  height: 32px;
  left: 80px;
  top: 24px;
`;

const LogoImage = styled.div`
  position: absolute;
  background: url(${Logo}) center no-repeat;
  width: 30px;
  height: 32px;
  transition: all 700ms ease-in-out 100ms;
`;

const LogoText = styled.a`
  position: absolute;
  width: 68px;
  height: 24px;
  left: 40px;
  margin-top: 5px;
  font-family: Brown;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #ff395b;
  cursor: pointer;
`;

function Header() {
  return (
    <>
      <LogoSelf>
        <LogoContainer>
          <LogoImage />
          <LogoText>airbnb</LogoText>
        </LogoContainer>
      </LogoSelf>
    </>
  );
}

export default Header;
