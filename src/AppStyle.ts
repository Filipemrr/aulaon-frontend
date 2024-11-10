import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AppWrapper = styled.div`
  ${() => css`
    h1 {
      font-size: 30px;
      color: var(--color-blue-primary);
    }
    p {
      padding: 0;
      margin: 0;
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
