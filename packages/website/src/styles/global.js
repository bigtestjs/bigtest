import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @font-face {
    font-weight: 700;
    font-family: 'Proxima Nova';
    src: url('/fonts/proxima-nova/319CC5_5_0.eot');
    src: url('/fonts/proxima-nova/319CC5_5_0.eot?#iefix') format('embedded-opentype'),
    url('/fonts/proxima-nova/319CC5_5_0.woff2') format('woff2'),
    url('/fonts/proxima-nova/319CC5_5_0.woff') format('woff'),
    url('/fonts/proxima-nova/319CC5_5_0.ttf') format('truetype');
  }

  @font-face {
    font-weight: 800;
    font-family: 'Proxima Nova';
    src: url('/fonts/proxima-nova/319CC5_8_0.eot');
    src: url('/fonts/proxima-nova/319CC5_8_0.eot?#iefix') format('embedded-opentype'),
    url('/fonts/proxima-nova/319CC5_8_0.woff2') format('woff2'),
    url('/fonts/proxima-nova/319CC5_8_0.woff') format('woff'),
    url('/fonts/proxima-nova/319CC5_8_0.ttf') format('truetype');
  }

  @font-face {
    font-weight: 300;
    font-family: 'Proxima Nova';
    src: url('/fonts/proxima-nova/319CC5_B_0.eot');
    src: url('/fonts/proxima-nova/319CC5_B_0.eot?#iefix') format('embedded-opentype'),
    url('/fonts/proxima-nova/319CC5_B_0.woff2') format('woff2'),
    url('/fonts/proxima-nova/319CC5_B_0.woff') format('woff'),
    url('/fonts/proxima-nova/319CC5_B_0.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proxima-nova/319CC5_11_0.eot');
    src: url('/fonts/proxima-nova/319CC5_11_0.eot?#iefix') format('embedded-opentype'),
    url('/fonts/proxima-nova/319CC5_11_0.woff2') format('woff2'),
    url('/fonts/proxima-nova/319CC5_11_0.woff') format('woff'),
    url('/fonts/proxima-nova/319CC5_11_0.ttf') format('truetype');
  }

  @font-face {
    font-weight: 600;
    font-family: 'Proxima Nova';
    src: url('/fonts/proxima-nova/319CC5_14_0.eot');
    src: url('/fonts/proxima-nova/319CC5_14_0.eot?#iefix') format('embedded-opentype'),
    url('/fonts/proxima-nova/319CC5_14_0.woff2') format('woff2'),
    url('/fonts/proxima-nova/319CC5_14_0.woff') format('woff'),
    url('/fonts/proxima-nova/319CC5_14_0.ttf') format('truetype');
  }

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

    /* Z-Indices */
    --z-top: 100;

    font-size: calc(15px * 1)
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

  /* Dark Mode */
  /* @media (prefers-color-scheme: dark) {
    :root {
      --body-bg: #1e1e1e;
      --body-color: #fafafa;
      --body-color-faded: #aaa;
      --logo-wordmark-color: #fff;
      --color-dark-blue-darkable: #59d6fb;
      --input-color: #ffffff;
    }
  } */


  /* Originally from layout.css */
  html {
  font-family: var(--font-sans-serif);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    display: block;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: var(--font-sans-serif);
    font-size: 1em;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  optgroup {
    font-weight: 700;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    font-family: var(--font-sans-serif);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: var(--font-sans-serif);
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }
  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: var(--font-sans-serif);
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: var(--font-sans-serif);
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: var(--font-sans-serif);
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: var(--font-sans-serif);
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: var(--font-sans-serif);
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }
  hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-family: var(--font-serif);
  }
  figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }
  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }
  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }
  address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  dt {
    font-weight: bold;
  }
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  thead {
    text-align: left;
  }
  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  th:last-child,
  td:last-child {
    padding-right: 0;
  }
  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
      "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  pre code {
    background: none;
    line-height: 1.42;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: " ";
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: "";
  }
`;

export default Global;
