import { forwardRef, ComponentProps } from "react";
import { HEADER_ICONS } from "constants/images";

export interface HeaderProps extends Omit<ComponentProps<"header">, "className"> {
  title: string;
  searchPlaceholder?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
  onSearch?: (query: string) => void;
  onBellClick?: () => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      title,
      searchPlaceholder = "Search HNIs, Reports",
      user,
      onSearch,
      onBellClick,
      ...rest
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        className="bg-white border-b border-[#f1f4f9] flex items-center justify-between pl-7 pr-5 py-3 relative shrink-0 w-full"
        {...rest}
      >
        <h1 className="text-[#2f5491] text-lg font-semibold leading-[1.3] text-nowrap">
          {title}
        </h1>
        <div className="flex gap-[14px] items-center justify-end relative shrink-0">
          <div className="border border-[#cbd5e1] border-solid flex gap-2 h-9 items-center px-3 py-0 rounded-[10px] w-[420px]">
            <div className="relative shrink-0 size-5">
              <img alt="Search" className="block max-w-none size-full" src={HEADER_ICONS.SEARCH} />
            </div>
            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
              className="flex-1 text-[#878d99] text-sm leading-6 bg-transparent border-0 outline-none"
            />
          </div>
          <button
            onClick={onBellClick}
            className="border border-[#cbd5e1] border-solid flex items-center justify-center rounded-[10px] shrink-0 size-9 hover:bg-gray-50 transition-colors"
            aria-label="Notifications"
          >
            <div className="relative shrink-0 size-5">
              <img alt="Bell" className="block max-w-none size-full" src={HEADER_ICONS.BELL} />
            </div>
          </button>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;


