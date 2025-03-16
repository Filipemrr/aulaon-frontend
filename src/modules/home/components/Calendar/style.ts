import { styled, Grid2, Button } from "@mui/material";

const MainContent = styled(Grid2)({
  backgroundColor: "var(--color-gray-bg)",
  border: "1px solid var(--color-blue-primary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  width: "100%",
  height: "90%",
  overflow: "hidden",
  whiteSpace: "normal",
});
const SectionTitle = styled(Grid2)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "12px",
  width: "100%",
  height: "20%",
});

const ShowMoreButton = styled(Button)({
  borderRadius: "18px",
  color: "var(--color-black-bg)",
  backgroundColor: "var(--color-blue-primary)",
  width: "12%",
  height: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "none",
});

const SectionWrapper = styled(Grid2)({
  width: "95%",
  height: "65%",
  borderRadius: "12px",
});

export { MainContent, SectionWrapper, SectionTitle, ShowMoreButton };
