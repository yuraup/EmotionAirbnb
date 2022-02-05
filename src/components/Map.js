import { useState } from "react";
import styled from "@emotion/styled";
import MapImg from "../assets/Map.png";
import Before from "../assets/Before.png";
import After from "../assets/After.png";

const MapContainer = styled.div`
  width: 1080px;
  height: auto;
  margin: 147px auto; //위아래는 0 왼쪽오른쪽은 auto
  display: flex;
  color: #f53851;
`;

const HoverBox = styled.div`
  margin-top: 30px;
  img {
    width: 377px;
    height: 358px;
    margin-left: 21px;
    cursor: pointer;
  }
  p {
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    margin-left: 30px;
  }
`;

const MapBox = styled.div`
  img {
    width: 517px;
    height: 506px;
    margin-left: 150px;
  }
`;

function Map() {
  const [ImgHover, setImgHover] = useState(false);
  return (
    <MapContainer>
      <HoverBox>
        <div
          onMouseOver={() => setImgHover(true)}
          onMouseOut={() => setImgHover(false)}
        >
          <img src={ImgHover ? After : Before} alt="이미지 호버" />
          <p>2022 새해 복 많이 받으랑</p>
        </div>
      </HoverBox>
      <MapBox>
        <img src={MapImg} alt="지도"></img>
      </MapBox>
    </MapContainer>
  );
}

export default Map;
