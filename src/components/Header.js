import styled from "@emotion/styled";
import Logo from "../assets/Logo.svg";

const LogoSelf = styled.div`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 106px;
  height: 32px;
  margin-left: 80px;
  }
`;
const LogoImg = styled.div`
  background: url(${Logo}) center no-repeat;
  width: 50px;
  height: 32px;
`;
const LogoText = styled.a`
  width: 68px;
  height: 24px;
  left: 40px;
  margin: 5px 0 0 6px;
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
          <LogoImg />
          <LogoText>airbnb</LogoText>
        </LogoContainer>
      </LogoSelf>
    </>
  );
}

export default Header;
