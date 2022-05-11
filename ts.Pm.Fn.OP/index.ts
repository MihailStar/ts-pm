// ⋕js.ts.Pm.Fn.OP.1
const DaysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] as const;
type DayOfWeek = typeof DaysOfWeek[Extract<keyof typeof DaysOfWeek, number>];

function getDayOfWeek(day?: number, month?: number, year?: number): DayOfWeek {
  const currentDate = new Date();
  const searchDate = new Date(
    year ?? currentDate.getFullYear(),
    month ?? currentDate.getMonth(),
    day ?? currentDate.getDate()
  );

  return DaysOfWeek[searchDate.getDay()];
}
