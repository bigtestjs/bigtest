import styled from 'styled-components';

const H1 = styled.h1`
  color: var(--color-dark-blue);
  font-weight: ${props => props.bold ? 600 : 300};
  margin-bottom: ${props => props.bold ? 'var(--space-single)' : '1.45rem'};
`;

const H2 = styled.h2`
  font-weight: 600;
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
  margin-top: ${props => props.marginTop ? `${props.marginTop}` : 'var(--space-single)'};
  margin-bottom: var(--space-half);
  font-weight: 700;
`;

const P = styled.p`
  font-family: ${props => props.font === "sans-serif" ? 'var(--font-sans-serif)' : 'var(--font-serif)'};
`;

export { H1, H2, H3, H4, P };
