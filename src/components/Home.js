import styled from "@emotion/styled";
import Cafe from "../assets/Cafe.png";
import TigerHome from "../assets/TigerHome.png";

const HomeSelf = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 80px;
  top: 130px;
`;

const HomeTitle = styled.h1`
  font-weight: 900;
  user-select: none;
`;

const Button = styled.button`
  width: ${(props) => (props.ButtonWidth ? "100px" : "70px")};
  height: 36px;
  left: 24px;
  top: 204px;
  background: #ffffff;
  margin-left: ${(props) => (props.ButtonLeft ? "0px" : "8px")};
  padding: 9.5px 16px;
  border: 1px solid #b0b0b0;
  box-sizing: border-box;
  border-radius: 30px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  position: absolute;
  margin-top: 63px;
  margin-left: ${(props) => (props.ImgLeft ? "0px" : "549px")};
`;

const LeftImgBox = styled.div`
  background: url(${TigerHome}) center no-repeat;
  width: 532px;
  height: 363px;
`;

const RightImgBox = styled.div`
  background: url(${Cafe}) center no-repeat;
  width: 532px;
  height: 363px;
`;

const ImgTextBox = styled.div`
  font-family: Roboto;
  top: 682.11px;
  margin-top: ${(props) => (props.TextTop ? "42px" : "0px")};
  line-height: ${(props) => (props.TextHeight ? "45px" : "0px")};
  font-weight: ${(props) => (props.TextWeight ? "400" : "900")};
`;

const HostButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 5px;
  width: 70px;
  height: 23px;
  left: 24px;
  top: 681px;
  border: 2px solid #222222;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 6px;
  background: #ffffff;
`;

function Home() {
  return (
    <HomeSelf>
      <HomeTitle>호랑님의 숙소</HomeTitle>
      {/* 버튼 */}
      <Button ButtonWidth ButtonLeft>
        숙소 유형
      </Button>
      <Button ButtonWidth={false} ButtonLeft={false}>
        요금
      </Button>
      {/* 이미지& 가격 1번째 박스*/}
      <ImgContainer ImgLeft>
        <LeftImgBox img></LeftImgBox>
        <ImgTextBox TextHeight TextTop TextWeight>
          <HostButton>슈퍼 호스트</HostButton>
          호랑이가 사는 집
        </ImgTextBox>
        <ImgTextBox TextHeight={false} TextTop={false} TextWeight={false}>
          ₩121,277 /1박
        </ImgTextBox>
      </ImgContainer>
      {/* 이미지&가격 2번째 박스 */}
      <ImgContainer ImgLeft={false}>
        <RightImgBox img={false}></RightImgBox>
        <ImgTextBox TextHeight TextTop TextWeight>
          <HostButton>슈퍼 호스트</HostButton>
          호랑이가 자주 가는 카페
        </ImgTextBox>
        <ImgTextBox TextHeight={false} TextTop={false} TextWeight={false}>
          ₩121,277 /1박
        </ImgTextBox>
      </ImgContainer>
    </HomeSelf>
  );
}

export default Home;
