import styled from "styled-components";
import EstateTypeToggle from "../components/EstateTypeToggle";
import HomeSearch from "../components/HomeSearch";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <EstateTypeToggle />
        <HomeSearch />
      </Content>
      <Menu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  background-image: linear-gradient(transparent, var(--color-background) 50%),
    url(https://cdn.pixabay.com/photo/2017/06/05/20/10/house-2375119_960_720.jpg);
  background-position: top center;
  background-size: 200%;
  background-position-y: -20%;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  box-sizing: border-box;

  width: 100%;
  height: calc(100% - 82px);

  padding: 32px;

  align-items: center;
`;

export default Home;
