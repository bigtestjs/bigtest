import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CoolBar from './coolbar.js';

const ContentContainer = styled.section`
  padding: var(--space-half-vw) var(--space-single-vw);
  box-sizing: content-box;
`;

const ContentContainerBar = styled.section`
  padding: var(--space-half-vw);
  padding-left: calc(var(--space-single-vw) - calc(var(--space-single)*.4));
  padding-right: var(--space-single-vw);
  box-sizing: content-box;
  width: 100%;
`;

Content.propTypes = {
  content: PropTypes.node,
  children: PropTypes.node
};

export default function Content({
  children,
  content = children,
  ...props
}) {
  if (props.coolbar) {
    return (
      <section style={{ display: "flex" }}>
        <CoolBar />
        <ContentContainerBar>
          {content}
        </ContentContainerBar>
      </section>
    );
  } else {
    return (
      <ContentContainer>
        {content}
      </ContentContainer>
    );
  };
};
