import styled from "styled-components";
import {TbSearch, TbWorld} from "react-icons/tb";

const Menu = () => {
  return (
    <Wrapper>
      <MenuItem>
        <TbSearch size={24} color={"var(--color-black)"} />
        <MenuText active>Search</MenuText>
      </MenuItem>
      <MenuItem>
        <TbWorld size={24} color={"var(--color-grey)"} />
        <MenuText>Explore</MenuText>
      </MenuItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);
  height: 82px;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
`;

const MenuText = styled.h3<{active?: boolean}>`
  font-size: 14px;
  font-weight: 500;

  color: ${({active}) => (active ? "var(--color-black)" : "var(--color-grey)")};
`;

export default Menu;
