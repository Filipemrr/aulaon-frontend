import React from "react";
import SectionContainer from "./../../Shared/components/section/style";
import SideBar from "./../../Shared/components/Sidebar";
import TopBar from "../../Shared/components/TopBar";
import MainSection from "./style";
import { Grid2 } from "@mui/material";

export const Homepage: React.FC = () => {
  return (
    <SectionContainer>
      <TopBar />
      <SideBar />
      <MainSection container spacing={2}>
        {/* Left section with three stacked boxes */}
        <Grid2 size={9} container direction="column">
          <Grid2 style={{ border: "1px solid green", height: "30%" }}>
            <h1>Banner minhas anotações</h1>
          </Grid2>
          <Grid2 style={{ border: "1px solid yellow", height: "30%" }}>
            <h1>Calendário</h1>
          </Grid2>
          <Grid2 style={{ border: "1px solid yellow", height: "30%" }}>
            <h1>Continue de onde parou</h1>
          </Grid2>
        </Grid2>

        {/* Right section that spans the full height of the left stack */}
        <Grid2 size={3} style={{ border: "1px solid yellow", height: "100%" }}>
          <h1>Desempenho</h1>
        </Grid2>
      </MainSection>
    </SectionContainer>
  );
};

export default Homepage;
