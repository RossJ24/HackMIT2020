import React from 'react';
import {useSwipeable} from 'react-swipeable';
import {Wrapper, CardContainer, Slot, NEXT, PREV} from './StyledComponents';

const getOrder = ({ index, pos, numItems }) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
  };
  const initialState = { pos: 0, sliding: false, dir: NEXT };
  
  const Board = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const numItems = React.Children.count(props.children);
    const slide = dir => {
      dispatch({ type: dir, numItems });
      setTimeout(() => {
        dispatch({ type: "stopSliding" });
      }, 50);
    };
    const handlers = useSwipeable({
      onSwipedUp: () => slide(NEXT),
      onSwipedDown: () => slide(PREV),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    });
    return (
      <div {...handlers}>
        <Wrapper>
          <CardContainer dir={state.dir} sliding={state.sliding}>
            {React.Children.map(props.children, (child, index) => (
              <Slot
                key={index}
                order={getOrder({ index: index, pos: state.pos, numItems })}
              >
                {child}
              </Slot>
            ))}
          </CardContainer>
        </Wrapper>
      </div>
    );
  };
  
  function reducer(state, { type, numItems }) {
    switch (type) {
      case "reset":
        return initialState;
      case PREV:
        return {
          ...state,
          dir: PREV,
          sliding: true,
          pos: state.pos === 0 ? numItems - 1 : state.pos - 1
        };
      case NEXT:
        return {
          ...state,
          dir: NEXT,
          sliding: true,
          pos: state.pos === numItems - 1 ? 0 : state.pos + 1
        };
      case "stopSliding":
        return { ...state, sliding: false };
      default:
        return state;
    }
  }

export default Board;