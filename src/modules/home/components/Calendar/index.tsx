import { Grid2 } from "@mui/material";
import {
  MainContent,
  SectionWrapper,
  SectionTitle,
  ShowMoreButton,
} from "./style";
import { RiArrowRightSLine } from "react-icons/ri";
import { CalendarItemBox } from "../Widgets/CalendarItem";
import { useEffect, useState } from "react";
import CalendarWidgetProps from "src/modules/types/CalendarWidget";
export const CalendarWidget = () => {
  const [calendarWidgetInfos, setCalendarWidgetInfos] = useState<
    CalendarWidgetProps[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      //mocking data from API
      setCalendarWidgetInfos([
        {
          time: "10:00",
          title: "Aula #12 - Cálculo Estequiométrico",
          mainColour: "var(--pastel-pink-primary)",
          secondaryColour: "var(--pastel-pink-secondary)",
        },
        {
          time: "10:00",
          title: "Aula #13 - Reações Químicas",
          mainColour: "var(--pastel-purple-primary)",
          secondaryColour: "var(--pastel-purple-secondary)",
        },
        {
          time: "15:00",
          title: "Aula #13 - Reações Químicas",
          mainColour: "var(--pastel-yellow-primary)",
          secondaryColour: "var(--pastel-yellow-secondary)",
        },
        {
          time: "08:00",
          title: "Aula #13 - Reações Químicas",
          mainColour: "var(--pastel-green-primary)",
          secondaryColour: "var(--pastel-green-secondary)",
        },
      ]);
    };

    fetchData();
  }, []);

  return (
    <SectionWrapper container gap={1}>
      <SectionTitle>
        <h3>Hoje</h3>
        <ShowMoreButton>
          <Grid2 size={10}>Ver Mais</Grid2>
          <Grid2 sx={{ display: "flex", alignItems: "center" }} size={3}>
            <RiArrowRightSLine size={30} />
          </Grid2>
        </ShowMoreButton>
      </SectionTitle>
      <MainContent container style={{ padding: "1rem" }} gap={2}>
        {calendarWidgetInfos.map((info) => (
          <CalendarItemBox
            title={info.title}
            time={info.time}
            mainColour={info.mainColour}
            secondaryColour={info.secondaryColour}
          />
        ))}
      </MainContent>
    </SectionWrapper>
  );
};
