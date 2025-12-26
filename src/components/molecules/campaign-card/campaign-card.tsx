import { forwardRef, ComponentProps } from "react";

export interface CampaignCardProps extends ComponentProps<"div"> {
  title: string;
  reached: number;
  viewed: number;
  meetings: number;
  date: string;
  reachedColor?: string;
  onView?: () => void;
}

const CampaignCard = forwardRef<HTMLDivElement, CampaignCardProps>(
  (
    {
      title,
      reached,
      viewed,
      meetings,
      date,
      reachedColor = "#f59e0b",
      onView,
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col gap-7 items-center px-4 py-3 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
          <div className="flex flex-col items-start pb-0.5 pt-0 px-0 relative shrink-0 w-full">
            <p className="text-[#15253f] text-sm font-bold leading-[1.4] w-full">
              {title}
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block max-w-none size-full"
                fill="none"
                viewBox="0 0 100 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="0.5"
                  x2="100"
                  y2="0.5"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-4 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-1.5 grow items-start justify-center min-h-0 min-w-0 relative shrink-0">
              <p
                className="text-lg font-semibold leading-none w-full"
                style={{ color: reachedColor }}
              >
                {reached}
              </p>
              <p className="text-gray-500 text-xs font-normal leading-none w-full">
                Reached
              </p>
            </div>
            <div className="flex flex-col gap-1.5 grow items-start justify-center min-h-0 min-w-0 relative shrink-0 text-gray-700">
              <p className="text-lg font-semibold leading-none w-full">
                {viewed}
              </p>
              <p className="text-xs font-normal leading-none w-full">Viewed</p>
            </div>
            <div className="flex flex-col gap-1.5 grow items-start justify-center min-h-0 min-w-0 relative shrink-0 text-gray-700">
              <p className="text-lg font-semibold leading-none w-full">
                {meetings}
              </p>
              <p className="text-xs font-normal leading-none w-full">
                Meetings
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <p className="text-gray-700 text-xs font-normal leading-none text-right text-nowrap">
            {date}
          </p>
          <button
            onClick={onView}
            className="bg-[#e8f1ff] flex flex-col h-[26px] items-center justify-center px-3 py-1 relative rounded-[50px] shrink-0 w-[60px]"
          >
            <p className="text-[#2e518a] text-[10px] font-semibold leading-[22px] text-nowrap">
              View
            </p>
          </button>
        </div>
      </div>
    );
  }
);

CampaignCard.displayName = "CampaignCard";

export default CampaignCard;

