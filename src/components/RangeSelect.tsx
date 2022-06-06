import styled from "styled-components";

const RangeSelect = () => {
  return (
    <Wrapper>
      <RangeSelectItem selected>1</RangeSelectItem>
      <RangeSelectItem>2</RangeSelectItem>
      <RangeSelectItem>3</RangeSelectItem>
      <RangeSelectItem>4</RangeSelectItem>
      <RangeSelectItem selected>5+</RangeSelectItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  align-items: center;
  justify-items: center;
`;

const RangeSelectItem = styled.div<{selected?: boolean}>`
  text-align: center;
  width: 100%;
  font-size: 14px;

  padding: ${({selected}) => (selected ? "8px 16px" : "4px")};
  border-radius: ${({selected}) => (selected ? "40px" : "0")};
  border: ${({selected}) =>
    selected ? "solid 1px var(--color-black)" : "none"};
  background-color: ${({selected}) =>
    selected ? "solid 1px var(--color-white)" : "var(--color-background)"};
`;

export default RangeSelect;
