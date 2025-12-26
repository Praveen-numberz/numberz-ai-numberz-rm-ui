import { forwardRef, ComponentProps } from "react";
import { ExclamationTriangleIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface AlertItem {
  title: string;
  description: string;
  type: "warning" | "success";
}

export interface AlertCardProps extends ComponentProps<"div"> {
  title: string;
  items: AlertItem[];
  onReallocate?: (item: AlertItem) => void;
  onViewAll?: () => void;
}

const AlertCard = forwardRef<HTMLDivElement, AlertCardProps>(
  ({ title, items, onReallocate, onViewAll, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col gap-5 px-4 py-3 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <div className="flex gap-2 grow items-center min-h-0 min-w-0 relative shrink-0">
            <ExclamationTriangleIcon className="size-5 text-[#bf2600] shrink-0" />
            <p className="text-[#15253f] text-sm font-bold leading-[1.3]">
              {title}
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="flex gap-0.5 items-center relative shrink-0"
          >
            <p className="text-[#2e518a] text-xs font-normal leading-[1.3]">
              View all
            </p>
            <ChevronRightIcon className="size-4 text-[#2e518a]" />
          </button>
        </div>
        <div className="bg-white flex flex-col gap-6 grow items-start min-h-0 min-w-0 overflow-hidden relative shrink-0 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 items-start justify-center pl-3 pr-0 py-0 relative shrink-0 w-full border-l-[3px] ${
                item.type === "warning"
                  ? "border-red-500"
                  : "border-green-500"
              }`}
            >
              <div className="flex flex-col gap-1 items-start relative shrink-0 text-nowrap w-full">
                <p className="text-[#15253f] text-sm font-semibold leading-[1.3] text-nowrap">
                  {item.title}
                </p>
                <p className="text-gray-600 text-xs font-normal leading-[1.35] text-nowrap">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => onReallocate?.(item)}
                className="flex gap-0.5 items-center relative shrink-0"
              >
                <p className="text-[#2e518a] text-xs font-normal leading-[1.35]">
                  Reallocate Portfolios
                </p>
                <ChevronRightIcon className="size-4 text-[#2e518a]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

AlertCard.displayName = "AlertCard";

export default AlertCard;

