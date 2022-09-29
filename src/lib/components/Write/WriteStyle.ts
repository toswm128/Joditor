import styled from "@emotion/styled";
import { basicColor } from "lib/style/color";

export const WriteContainer = styled.div`
  /* 레이아웃 */
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    /* 레이아웃 */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 320px;
    /* 고급 */
    font-size: 48px;
    font-weight: bold;
    color: ${basicColor};
    background-color: #e5e5e5;
  }
`;

export const WriteComponent = styled.div`
  /* 레이아웃 */
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }

  .title {
    /* 레이아웃 */
    resize: none;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    height: auto;
    padding: 6px 1px;
    /* 고급 */
    font-size: 48px;
    font-weight: bold;
    border: 0;
    outline: none;
    cursor: text;
  }
  .content {
    /* 레이아웃 */
    width: 100%;
    resize: none;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    height: auto;
    padding: 6px 2px;
    /* 고급 */
    font-size: 1.125rem;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
      "Segoe UI Symbol";
    border: 0;
    outline: none;
    cursor: text;
  }
  .tab {
    margin: 0;
  }
  .title::placeholder {
    /* 고급 */
    font-size: 48px;
    color: ${basicColor};
  }
`;
