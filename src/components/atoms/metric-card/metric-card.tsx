import { forwardRef, ComponentProps } from "react";

export interface MetricCardProps extends ComponentProps<"div"> {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
  icon?: React.ComponentType<{ className?: string }>;
}

const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  ({ label, value, change, changeType, icon: Icon, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col gap-5 px-4 py-3 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex items-start">
          <p className="text-gray-500 text-xs font-medium leading-5">{label}</p>
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <p className="text-[#2e518a] text-xl font-semibold leading-none">
            {value}
          </p>
          {change && (
            <p
              className={`text-[10px] leading-normal ${
                changeType === "positive"
                  ? "text-green-600"
                  : changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-700"
              }`}
            >
              {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className="absolute right-3 top-3 size-5">
            <Icon className="size-full" />
          </div>
        )}
      </div>
    );
  }
);

MetricCard.displayName = "MetricCard";

export default MetricCard;

