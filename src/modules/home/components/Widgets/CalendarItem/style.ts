import { styled, Grid2 } from "@mui/material";

const CalendarContainer = styled(Grid2)({
  borderRadius: "10px",
  height: "95%",
  padding: "0rem",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "23%",
  overflow: "hidden",
  whiteSpace: "normal",
  maxWidth: "100%",
  maxHeight: "100%",
  wordWrap: "break-word",
});

const DividerBox = styled(Grid2)({
  width: "50%",
  height: "5%",
  borderRadius: "10px",
});
const StyledTime = styled("h1")({
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
  padding: "0.5rem",
  borderRadius: "8px",
});

const TitleBox = styled(Grid2)({
  height: "30%",
  width: "80%",
  borderRadius: "10px",
  marginTop: "10%",
  fontSize: "0.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontWeight: "light",
  color: "#333",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  wordWrap: "break-word",
});
export { CalendarContainer, DividerBox, TitleBox, StyledTime };
