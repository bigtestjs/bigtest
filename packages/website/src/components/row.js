import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  align-items: ${ props => props.align === "initial" ? 'initial' : 'center'};
`;

const RowComponent = styled.div`
  margin-left: var(--space-half-vw);
`;

const Row = ({ align, children }) => {
  return (
    <RowContainer align={align}>
      {children.map((x, i) => {
        if (i === 0) {
          return (
            <div key={i} style={{ flex: x.props.flex }}>
              {x.props.children}
            </div >
          );
        } else {
          return (
            <RowComponent key={i} style={{ flex: x.props.flex }}>
              {x.props.children}
            </RowComponent>
          );
        }
      })}
    </RowContainer>
  );
};

export default Row;
