import { styled, Grid2, Button } from "@mui/material";

const BannerGrid = styled(Grid2)({
  backgroundColor: "var(--color-blue-primary)",
  borderRadius: "12px",
  width: "95%",
  height: "65%",
});

const ContinueButton = styled(Button)({
  borderRadius: "18px",
  color: "var(--color-black-bg)",
  backgroundColor: "var(--color-white-primary)",
  width: "30%",
  height: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "none",
});

const NotationTitle = styled("h1")`
  font-size: 24px;
  max-width: 500px;
  max-height: 3.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { BannerGrid, ContinueButton, NotationTitle };
