import { forwardRef, ComponentProps } from "react";
import {
  InformationCircleIcon,
  ChevronRightIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export interface FollowUpItem {
  name: string;
  date: string;
}

export interface FollowUpListProps extends ComponentProps<"div"> {
  title: string;
  items: FollowUpItem[];
  onScheduleCall?: (item: FollowUpItem) => void;
  onViewAll?: () => void;
}

const FollowUpList = forwardRef<HTMLDivElement, FollowUpListProps>(
  ({ title, items, onScheduleCall, onViewAll, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col gap-5 px-4 py-3 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <div className="flex gap-2 grow items-center min-h-0 min-w-0 relative shrink-0">
            <InformationCircleIcon className="size-5 text-[#bf2600] shrink-0" />
            <p className="text-[#15253f] text-sm font-bold leading-[1.3]">
              {title}
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="flex items-center relative shrink-0"
          >
            <p className="text-[#2e518a] text-xs font-normal leading-[1.3]">
              View all
            </p>
            <ChevronRightIcon className="size-4 text-[#2e518a]" />
          </button>
        </div>
        <div className="bg-white flex flex-col items-center overflow-hidden relative shrink-0 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 flex gap-5 items-center px-0 py-2.5 relative shrink-0 w-full ${
                index === items.length - 1 ? "pb-0 pt-2.5" : ""
              }`}
            >
              <div className="flex flex-col gap-1 grow items-start justify-center min-h-0 min-w-0 relative shrink-0">
                <p className="text-[#15253f] text-sm font-semibold leading-[1.3] w-[240px]">
                  {item.name}
                </p>
                <p className="text-gray-600 text-xs font-normal leading-[1.35] min-w-full w-[min-content]">
                  {item.date}
                </p>
              </div>
              <button
                onClick={() => onScheduleCall?.(item)}
                className="flex gap-1.5 items-center justify-end relative shrink-0 w-[120px]"
              >
                <p className="text-[#2e518a] text-xs font-normal leading-[1.35]">
                  Schedule Call
                </p>
                <CalendarIcon className="size-4 text-[#2e518a]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

FollowUpList.displayName = "FollowUpList";

export default FollowUpList;

