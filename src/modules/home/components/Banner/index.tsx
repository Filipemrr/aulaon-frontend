import { Grid2 } from "@mui/material";
import { BannerGrid, ContinueButton, NotationTitle } from "./style";
import { FaArrowRight } from "react-icons/fa";
export const HomeBanner = () => {
  return (
    <BannerGrid container>
      {/* Subtitulo ultima anotacao */}
      <Grid2
        container
        direction="column"
        size={6}
        style={{ padding: "1rem" }}
        gap={1}
      >
        <Grid2>
          <p style={{ fontWeight: "light", fontSize: "13px" }}>
            Última Anotação
          </p>
        </Grid2>

        {/* Titulo da ultima anotacao */}
        <Grid2>
          <NotationTitle
            style={{
              color: "var(--color-black-bg)",
            }}
          >
            Aula #12 - Calculo Estequiometrico
          </NotationTitle>
        </Grid2>

        {/* Botao Continuar */}
        <Grid2>
          <ContinueButton endIcon={<FaArrowRight size={12} />}>
            <p style={{ fontSize: "13px" }}>Continuar</p>
          </ContinueButton>
        </Grid2>
      </Grid2>
    </BannerGrid>
  );
};
