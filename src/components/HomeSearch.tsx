import {Fragment} from "react";
import {BiBath} from "react-icons/bi";
import {MdOutlineBed} from "react-icons/md";
import {TbMapPin} from "react-icons/tb";
import styled from "styled-components";
import Button from "./Button";
import RangeSelect from "./RangeSelect";

const HomeSearch = () => {
  return (
    <Fragment>
      <Wrapper>
        <SearchMenu>
          <SearchMenuItem active>All</SearchMenuItem>
          <SearchMenuItem>House</SearchMenuItem>
          <SearchMenuItem>Apartment</SearchMenuItem>
        </SearchMenu>
        <Content>
          <SelectWrapper>
            <TbMapPin
              size={28}
              color={"var(--color-black)"}
              style={{marginRight: 8}}
            />
            <LocationInput />
          </SelectWrapper>
          <SelectWrapper>
            <MdOutlineBed
              size={28}
              color={"var(--color-black)"}
              style={{marginRight: 8}}
            />
            <RangeSelect />
          </SelectWrapper>
          <SelectWrapper>
            <BiBath
              size={28}
              color={"var(--color-black)"}
              style={{marginRight: 8}}
            />
            <RangeSelect />
          </SelectWrapper>
          <Button>Find housing</Button>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 28px;
`;

const SearchMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const SearchMenuItem = styled.div<{active?: boolean}>`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 16px;
  text-align: center;

  color: ${({active}) => (active ? "var(--color-black)" : "var(--color-grey)")};
  border-bottom: solid 2px
    ${({active}) => (active ? "var(--color-black)" : "var(--color-grey)")};
`;

const LocationInput = styled.input`
  border: none;
  border-bottom: solid 2px var(--color-grey);
  width: 100%;
  padding: 8px 0;
  font-family: inherit;

  transition: border 0.2s;

  &:active,
  &:focus,
  &:focus-visible {
    border-bottom: solid 2px var(--color-black);
    outline: none;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    padding-bottom: 32px;
  }
`;

export default HomeSearch;
