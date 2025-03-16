import CalendarWidgetProps from "src/modules/types/CalendarWidget";
import { CalendarContainer, DividerBox, StyledTime, TitleBox } from "./style";

export const CalendarItemBox = ({
  title,
  time,
  mainColour,
  secondaryColour,
}: CalendarWidgetProps) => {
  return (
    <CalendarContainer sx={{ backgroundColor: mainColour }}>
      <StyledTime>{time}</StyledTime>
      <DividerBox sx={{ backgroundColor: secondaryColour }}></DividerBox>
      <TitleBox sx={{ backgroundColor: secondaryColour }}>{title}</TitleBox>
    </CalendarContainer>
  );
};
