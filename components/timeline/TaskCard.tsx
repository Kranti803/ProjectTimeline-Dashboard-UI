import { MoreHorizontal, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  subtitle: string;
  color: "blue" | "green" | "orange" | "red" | "purple" | "pink";
  avatars?: string[];
  featured?: boolean;
  className?: string;
}

const colorClasses = {
  blue: "border-l-timeline-blue",
  green: "border-l-timeline-green",
  orange: "border-l-timeline-orange",
  red: "border-l-timeline-red",
  purple: "border-l-timeline-purple",
  pink: "border-l-timeline-pink",
};

export const TaskCard = ({
  title,
  subtitle,
  color,
  avatars = [],
  featured,
  className,
}: TaskCardProps) => {
  if (featured) {
    return (
      <div
        className={cn(
          "bg-linear-to-r from-blue-500 via-pink-500 to-orange-500 rounded-lg p-4 min-w-[280px] shadow-md hover:shadow-lg transition-all cursor-pointer",
          className
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-white text-sm mb-1">{title}</h3>
            <p className="text-xs text-white/80">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {avatars.map((avatar, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src={avatar} />
                  <AvatarFallback className="text-xs">U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 hover:bg-white/20"
            >
              <MoreVertical className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-card rounded-lg p-4 border-l-4 min-w-[280px] shadow-sm hover:shadow-md transition-all cursor-pointer",
        colorClasses[color],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-card-foreground text-sm mb-1">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <Avatar key={i} className="h-6 w-6 border-2 border-background">
                <AvatarImage src={avatar} />
                <AvatarFallback className="text-xs bg-muted">
                  U{i + 1}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <MoreVertical className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
};
