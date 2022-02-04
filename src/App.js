import Header from "./components/Header";
import Home from "./components/Home";
import styled from "@emotion/styled";
import Map from "./components/Map";

const Self = styled.div`
  background: #ffffff;
`;

function App() {
  return (
    <Self>
      <div>
        <Header />
        <Map />
        <Home />
      </div>
    </Self>
  );
}

export default App;
