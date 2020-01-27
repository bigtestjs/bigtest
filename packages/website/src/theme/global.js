import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const Global = createGlobalStyle`
  ${reset};
  
  :root {
    /* Font Stack */
    --font-sans-serif: "Proxima Nova", "Helvetica", sans-serif;
    --font-serif: "Georgia", "Times", "Times New Roman", serif;

    /* Brand Colors */
    --color-pink: #F74D7B;
    --color-light-light-blue: #E9F6FD;
    --color-light-blue: #26ABE8;
    --color-dark-blue: #14315D;
    --color-dark-blue-darkable: #14315D;
    --link-color: var(--color-light-blue);
    --button-color: var(--color-dark-blue);

    --input-border-color: var(--color-dark-blue);
    --input-color: #000;

    /* Light Mode */
    --body-bg: #fff;
    --body-color: #444;
    --body-color-faded: #888;
    --logo-wordmark-color: var(--color-dark-blue);
    --footer-bg: #E7EAEE;

    /* Spacing  */
    --space-single: 1rem;
    --space-half: calc(var(--space-single) * 0.5);
    --space-one-half: calc(var(--space-single) * 1.5);
    --space-double: calc(var(--space-single) * 2);
    --space-triple: calc(var(--space-single) * 3);
    --space-quadruple: calc(var(--space-single) * 4);

    --space-single-vw: 5vw;
    --space-half-vw: calc(var(--space-single-vw) * 0.5);
    --space-one-half-vw: calc(var(--space-single-vw) * 1.5);
    --space-double-vw: calc(var(--space-single-vw) * 2);
    --space-triple-vw: calc(var(--space-single-vw) * 3);

    /* Font Size (1.125 Scale) */
    --size-scale: 1.125;
    --size-base: 1.125rem;
    /* no exponential math with calc */
    --size-med-lg: calc(
      var(--size-base) *
      var(--size-scale));
    --size-large: calc(
      var(--size-base) *
      var(--size-scale) *
      var(--size-scale));
    --size-xl: calc(
      var(--size-base) *
      var(--size-scale) *
      var(--size-scale) *
      var(--size-scale));
    --size-xxl: calc(
      var(--size-base) *
      var(--size-scale) *
      var(--size-scale) *
      var(--size-scale) *
      var(--size-scale));
    --size-xxxl: calc(
      var(--size-base) *
      var(--size-scale) *
      var(--size-scale) *
      var(--size-scale) *
      var(--size-scale) *
      var(--size-scale));
    --size-med-sm: calc(
      var(--size-base) /
      var(--size-scale));
    --size-small: calc(
      var(--size-base) /
      var(--size-scale) /
      var(--size-scale));
    --size-xs: calc(
      var(--size-base) /
      var(--size-scale) /
      var(--size-scale) /
      var(--size-scale));
  }

  /* Break Points */
  @media(min-width: 768px) {
      :root {
      --size-scale: 1.2;
      --size-base: 1.25rem;
    }
  }

  @media(min-width: 1024px) {
      :root {
      --space-single-vw: 7.5vw;
    }
  }

  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.62671rem;
  }
  h3 {
    font-size: 1.38316rem;
  }
  h4 {
    font-size: 1rem;
  }
  h1, h2, h3, h4, b, p {
    margin-bottom: 1.45rem;
  }
  h1, h2, h3, h4, b {
    font-weight: bold;
  }
`;

export default Global;
