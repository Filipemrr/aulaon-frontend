import styled, { css } from "styled-components";

const AppWrapper = styled.div`
  ${() => css`
    // COLORS
    --color-blue-primary: #8eaeeb;
    --color-gray-bg: #303731;
    --color-black-bg: #1b1919;
    --color-danger: #dc3545;

    // PASTEL COLORS
    --pastel-blue-primary: #8eaeeb;
    --pastel-blue-secondary: #7995cc;

    --pastel-pink-primary: #f0bfbf;
    --pastel-pink-secondary: #d0a6a6;

    --pastel-green-primary: #bff0db;
    --pastel-green-secondary: #9cd0ba;

    --pastel-purple-primary: #d6d2fe;
    --pastel-purple-secondary: #bdb9df;

    --pastel-yellow-primary: #f6fac1;
    --pastel-yellow-secondary: #d8d8a8;

    h1 {
      font-size: 30px;
      color: var(--color-blue-primary);
    }
  `}
`;

const StyledButton = styled.button`
  ${() => css`
    background-color: var(--color-blue-primary);
    border: 1px solid var(--color-blue-primary);
  `}
`;

export { AppWrapper, StyledButton };
