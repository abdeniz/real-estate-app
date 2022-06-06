import styled from "styled-components";
import "./App.css";
import Home from "./views/Home";

function App() {
  return (
    <AppWrapper className="app">
      <Home />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
