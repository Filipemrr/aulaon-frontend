import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AppWrapper = styled.div`
  ${() => css`
    h1 {
      color: var(--color-blue-primary);
    }
    p {
      font-weight: "light";
      font-size: "13px";
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
