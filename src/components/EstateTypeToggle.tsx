import styled from "styled-components";
import Button from "./Button";

const EstateTypeToggle = () => {
  return (
    <Wrapper>
      <Button background>Buy</Button>
      <Button background={false}>Rent</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: var(--color-white);
  margin-bottom: 16px;
  width: 100%;
  border-radius: 100px;
  padding: 8px;
`;

export default EstateTypeToggle;
