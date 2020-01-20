import styled from 'styled-components';

const logo_height = "calc(var(--size-base)*2/1.75)";

const Index = styled.div`
  h1 {
    color: var(--color-dark-blue);
    &.head{
      font-weight: 600;
    margin-bottom: var(--space-single);
    }
    &.sub{
      font-weight: lighter;
    }
  }

  h2 {
    font-weight: 600;
    &.light-blue {
      color: var(--color-light-blue);
    }
    &.pink {
      color: var(--color-pink);
    }
    &.dark-blue {
      color: var(--color-dark-blue);
    }
  }

  h3 {
    color: var(--color-light-blue);
  }

  h4 {
    color: var(--color-dark-blue);
    margin-top: var(--space-single);
    margin-bottom: var(--space-half);
    font-weight: 700;
  }

  p {
    &.subscribe-top {
      font-family: var(--font-sans-serif);
      font-weight: 700;
      color: var(--color-dark-blue);
      margin-top: var(--space-triple);
      font-size: var(--size-med-sm);
    }
    &.subscribe-bottom {
      font-family: var(--font-sans-serif);
      color: var(--color-dark-blue);
    }
    &.proxima {
      font-family: var(--font-sans-serif);
    }
  }
  
  .image {
    height: 200px; 
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .side-note {
    background-color: var(--color-light-light-blue);
    padding: var(--space-double);
  }

  .reach-out {
    align-items: initial;
    h4 {
      margin-top: 0;
      margin-bottom: var(--space-one-half);
      font-weight: 700;
    }
    ul {
      list-style: none;
      margin-left: 0;
      li {
        a {
          display: flex;
          text-decoration: none;
          color: var(--color-dark-blue);
          align-items: center;
        
          img {
            display: inline-block;
            height: calc(${logo_height});
            padding-right: var(--space-half);
          }
        }
      }
    }
  }
`;

export default Index;
