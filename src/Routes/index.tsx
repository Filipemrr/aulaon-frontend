import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../modules/home";
import Player from "../modules/player";
import { StyledButton } from "../AppStyle";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledButton>Button Test</StyledButton>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
