import styled from "@emotion/styled";
import { backgroundColor } from "../../../../../../../style/color";

export const TagContainer = styled.div`
  padding: 6px 0;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    background-color: ${backgroundColor};
  }
  & > img {
    width: 50px;
    height: 50px;
    padding: 5px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & > h1 {
      margin: 0;
      font-size: 1rem;
      font-weight: normal;
    }
    & > span {
      margin: 0;
      font-size: 0.7rem;
    }
  }
`;
