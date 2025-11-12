import { TaskCard } from "./TaskCard";
import { tasks } from "@/constant";


export const TimelineGrid = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-auto">
      <div className="relative min-h-[600px] min-w-max px-6 py-8 inline-block">
        <div className="absolute inset-0 flex">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="shrink-0 w-10 border-l border-border/50" />
          ))}
        </div>

        {/* Task cards */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="absolute"
            style={{
              left: `${task.left}px`,
              top: `${task.top}px`,
            }}
          >
            <TaskCard {...task} />
          </div>
        ))}
      </div>
    </div>
  );
};
