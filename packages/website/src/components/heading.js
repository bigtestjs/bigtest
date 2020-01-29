import styled from 'styled-components';

const H1 = styled.h1`
  color: var(--color-pink);
  font-weight: 200;
  line-height: var(--space-triple);
`;

const H2 = styled.h2`
  color: ${props => {
    if (props.color === "light-blue") {
      return 'var(--color-light-blue)';
    } else if (props.color === "dark-blue") {
      return 'var(--color-dark-blue)';
    } else if (props.color === "pink") {
      return 'var(--color-pink)';
    } else {
      return 'var(--input-color)';
    }
  }};
`;

const H3 = styled.h3`
  color: var(--color-light-blue);
`;

const H4 = styled.h4`
  color: var(--color-dark-blue);
  margin-bottom: var(--space-half);
`;

export { H1, H2, H3, H4 };
