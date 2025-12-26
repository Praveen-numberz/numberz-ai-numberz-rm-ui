import { forwardRef, ComponentProps } from "react";
import { BookOpenIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface ExploreProductsProps extends ComponentProps<"div"> {
  title: string;
  description: string;
  imageUrl?: string;
  onRead?: () => void;
  onViewAll?: () => void;
}

const ExploreProducts = forwardRef<HTMLDivElement, ExploreProductsProps>(
  ({ title, description, imageUrl, onRead, onViewAll, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col grow h-[180px] items-start justify-between min-h-0 min-w-0 p-4 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex gap-5 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-1 grow items-start min-h-0 min-w-0 relative shrink-0">
            <p className="text-[#091e42] text-sm font-bold leading-[21px] relative shrink-0 text-nowrap">
              {title}
            </p>
            <p className="text-[#344563] text-xs font-normal leading-[1.3] min-w-full relative shrink-0 w-[min-content]">
              {description}
            </p>
          </div>
          {imageUrl && (
            <div className="h-20 overflow-clip relative rounded-lg shrink-0 w-[135px]">
              <div className="absolute bg-purple-100 h-[159.75px] left-0 top-[-24px] w-[135px]" />
              <div className="absolute h-[99.75px] left-[20.8px] top-[-9.88px] w-[93.396px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full"
                  src={imageUrl}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <button
            onClick={onRead}
            className="bg-[#e8f1ff] flex gap-0.75 items-center pl-1.5 pr-3 py-0.5 relative rounded-full shrink-0"
          >
            <div className="overflow-clip relative shrink-0 size-5">
              <BookOpenIcon className="size-full text-[#2e518a]" />
            </div>
            <p className="text-[#2e518a] text-xs font-normal leading-[1.3]">
              Read
            </p>
          </button>
          <button
            onClick={onViewAll}
            className="flex items-center relative shrink-0"
          >
            <p className="text-[#2e518a] text-xs font-normal leading-[1.3]">
              View all
            </p>
            <ChevronRightIcon className="size-5 text-[#2e518a]" />
          </button>
        </div>
      </div>
    );
  }
);

ExploreProducts.displayName = "ExploreProducts";

export default ExploreProducts;

