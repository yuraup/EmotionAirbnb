import Header from "./components/Header";
import Home from "./components/Home";
import styled from "@emotion/styled";
const Self = styled.div`
  background: #ffffff;
`;

function App() {
  return (
    <Self>
      <div>
        <Header />
        <Home />
      </div>
    </Self>
  );
}

export default App;
