import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

/*
transform: ${props => {
    if (!props.sliding) return "translateY(calc(80% - 20px))";
    if (props.dir === PREV) return "translateY(calc(2 * (80% - 20px)))";
    return "translateY(0%)";
  }};
  */

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Slot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  height: 100vh;
  order: ${props => props.order};
`;