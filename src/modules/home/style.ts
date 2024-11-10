import { styled, Grid2 } from "@mui/material";

const MainSection = styled(Grid2)({
  border: "1px solid red",
  width: "89%",
  height: "97vh",
  marginLeft: "11.1%",
});

const SectionGrid = styled(Grid2)({
  border: "1px solid green",
  height: "30%",
  display: "flex",
  paddingTop: "1rem",
  justifyContent: "center",
});
export { MainSection, SectionGrid };
