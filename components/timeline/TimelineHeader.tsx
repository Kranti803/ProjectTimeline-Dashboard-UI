const TimelineHeader = () => {
  const months = ["December 2024", "January 2025", "February 2025"];
  const totalDays = 30;
  const startDay = 23;
  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const getDayLabel = (day: number) => {
    const date = new Date(2024, 11, day); 
    return dayNames[date.getDay()];
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          {months.map((month, index) => (
            <span
              key={month}
              className={`text-sm font-medium ${
                index === 0 || index === 1
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {month}
            </span>
          ))}
        </div>
      </div>


      <div className="w-full overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {Array.from({ length: totalDays }).map((_, i) => {
            const day = startDay + i;
            const actualDay = day > 31 ? day - 31 : day;

            return (
              <div
                key={i}
                className="w-8 text-center hover:bg-muted rounded-md py-1 transition-colors"
              >
                <div className="text-[11px] text-muted-foreground font-medium">
                  {getDayLabel(actualDay)}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {actualDay}
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </>
  );
};

export default TimelineHeader;
