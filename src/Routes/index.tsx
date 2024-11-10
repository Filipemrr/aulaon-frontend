import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../modules/home";
import Player from "../modules/player";
import { StyledButton } from "../AppStyle";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledButton>Button aa</StyledButton>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
