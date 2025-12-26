import { forwardRef, ComponentProps } from "react";

export interface ActionCardProps extends ComponentProps<"div"> {
  title: string;
  description: string;
  imageUrl?: string;
  imageBgColor?: string;
  actionLabel: string;
  actionIcon?: React.ComponentType<{ className?: string }>;
  onAction?: () => void;
  viewAllLabel?: string;
  onViewAll?: () => void;
}

const ActionCard = forwardRef<HTMLDivElement, ActionCardProps>(
  (
    {
      title,
      description,
      imageUrl,
      imageBgColor = "#fffae6",
      actionLabel,
      actionIcon: ActionIcon,
      onAction,
      viewAllLabel = "View all",
      onViewAll,
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col items-start overflow-hidden border-b border-gray-100 last:border-b-0 ${className}`}
        {...rest}
      >
        <div className="flex gap-4 items-center overflow-hidden p-4 w-full">
          <div
            className="flex h-full items-center justify-center p-2 shrink-0 w-[110px]"
            style={{ backgroundColor: imageBgColor }}
          >
            {imageUrl && (
              <div className="h-[78.75px] relative shrink-0 w-[71.248px]">
                <img
                  alt=""
                  className="absolute h-[76%] left-0 max-w-none top-[15.01%] w-full"
                  src={imageUrl}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-6 grow items-start min-h-0 min-w-0 shrink-0">
            <div className="flex flex-col gap-1.5 items-start relative shrink-0">
              <p className="text-[#091e42] text-[13.5px] font-black leading-[21px] w-full">
                {title}
              </p>
              <p className="text-[#344563] text-[10.5px] font-normal leading-[11.25px] w-full">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <button
                onClick={onAction}
                className="bg-[#e8f1ff] flex gap-0.75 items-center pl-1.5 pr-3 py-0.5 rounded-full shrink-0"
              >
                {ActionIcon && (
                  <div className="overflow-clip relative shrink-0 size-5">
                    <ActionIcon className="size-full text-[#2e518a]" />
                  </div>
                )}
                <p className="text-[#2e518a] text-xs font-normal leading-[1.3]">
                  {actionLabel}
                </p>
              </button>
              <button
                onClick={onViewAll}
                className="flex items-center relative shrink-0"
              >
                <p className="text-[#2e518a] text-xs font-normal leading-[1.3]">
                  {viewAllLabel}
                </p>
                <div className="relative shrink-0 size-4">
                  <svg
                    className="size-full"
                    fill="none"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="#2e518a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ActionCard.displayName = "ActionCard";

export default ActionCard;

