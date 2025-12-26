import { forwardRef, ComponentProps } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export interface RepositoryItem {
  name: string;
  imageUrl?: string;
  isNew?: boolean;
}

export interface RepositorySectionProps extends ComponentProps<"div"> {
  title: string;
  subtitle: string;
  items: RepositoryItem[];
  onViewAll?: () => void;
  onItemClick?: (item: RepositoryItem) => void;
}

const RepositorySection = forwardRef<HTMLDivElement, RepositorySectionProps>(
  (
    { title, subtitle, items, onViewAll, onItemClick, className = "", ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col gap-4 grow h-[180px] items-start min-h-0 min-w-0 overflow-hidden p-4 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <div className="flex flex-col gap-1 items-start overflow-hidden relative w-[146px]">
            <p className="text-[#172b4d] text-sm font-bold leading-normal relative shrink-0 w-full">
              {title}
            </p>
            <p className="text-gray-500 text-xs font-normal leading-[11.25px] relative shrink-0 w-full">
              {subtitle}
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
        <div className="h-0 relative shrink-0 w-[350.25px]">
          <div className="absolute inset-[-0.23px_0]">
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
        <div className="flex flex-col gap-[17px] items-start relative shrink-0 w-full">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onItemClick?.(item)}
              className="flex items-center justify-between relative shrink-0 w-full"
            >
              <div className="flex gap-2.25 items-center relative shrink-0">
                <div className="bg-white border border-gray-200 ml-0 mt-0 rounded size-8 relative">
                  {item.imageUrl && (
                    <div className="ml-[2.4px] mt-[2.4px] relative size-[27.2px]">
                      <img
                        alt={item.name}
                        className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
                        src={item.imageUrl}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start relative shrink-0">
                  <div className="flex gap-2.25 items-center relative shrink-0 w-full">
                    <p className="capitalize text-gray-700 text-sm font-semibold leading-normal relative shrink-0 text-nowrap">
                      {item.name}
                    </p>
                    {item.isNew && (
                      <div className="bg-[#0052cc] flex items-center px-0.75 py-0 relative rounded-[3px] shrink-0">
                        <p className="text-white text-[8.25px] font-bold text-center text-nowrap uppercase tracking-[-0.084px] leading-3">
                          NEW
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-transparent overflow-clip relative shrink-0 size-[18px]">
                <ChevronRightIcon className="size-full text-[#091e42]" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }
);

RepositorySection.displayName = "RepositorySection";

export default RepositorySection;

