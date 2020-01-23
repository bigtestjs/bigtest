import styled from 'styled-components';

const P = styled.p`
  font-family: ${props => props.font === "sans-serif" ? 'var(--font-sans-serif)' : 'var(--font-serif)'};
`;

export { P };
