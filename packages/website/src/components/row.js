import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RowComponent = styled.div`
  margin-left: var(--space-half-vw);
`;

const Row = ({ className, children }) => {
  return (
    <RowContainer className={className}>
      {children.map((x, i) => {
        if (i === 0) {
          return (
            <div className={x.props.className} style={{ flex: x.props.flex }}>
              {x.props.children}
            </div >
          );
        } else {
          return (
            <RowComponent className={x.props.className} style={{ flex: x.props.flex }}>
              {x.props.children}
            </RowComponent>
          );
        }
      })}
    </RowContainer>
  );
};

export default Row;
