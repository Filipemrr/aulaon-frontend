import React from "react";
import SectionContainer from "./../../Shared/components/section/style";
import SideBar from "./../../Shared/components/Sidebar";
import TopBar from "../../Shared/components/TopBar";
import { MainSection, SectionGrid } from "./style";
import { Grid2 } from "@mui/material";
import { HomeBanner } from "./components/Banner";

export const Homepage: React.FC = () => {
  return (
    <SectionContainer>
      <TopBar />
      <SideBar />
      <MainSection container spacing={1}>
        {/* Pilha com 3 sessoes uma abaixo da outra (Banner, Calendário, Continue de onde parou)*/}
        <Grid2 size={8} container direction="column">
          <SectionGrid>
            <HomeBanner />
          </SectionGrid>
          <SectionGrid>
            <h1>Calendário</h1>
          </SectionGrid>
          <SectionGrid>
            <h1>Continue de onde parou</h1>
          </SectionGrid>
        </Grid2>
        {/* Sessao lateral (Meu Desempenho)*/}
        <Grid2 size={4} style={{ border: "1px solid yellow", height: "100%" }}>
          <h1>Desempenho</h1>
        </Grid2>
      </MainSection>
    </SectionContainer>
  );
};

export default Homepage;
