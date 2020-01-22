import styled from 'styled-components';

const SideBox = styled.div`
  background-color: var(--color-light-light-blue);
  padding: var(--space-double);
`;

const Contact = styled.ul`
  list-style: none;
  margin-top: var(--space-one-half);
  margin-left: 0;
`;

const ContactItem = styled.a`
  display: flex;
  text-decoration: none;
  color: var(--color-dark-blue);
  align-items: center;
`;

const ContactIcon = styled.img`
  height: calc(var(--size-base)*2/1.75);
  padding-right: var(--space-half);
`;

export { SideBox, Contact, ContactItem, ContactIcon };
