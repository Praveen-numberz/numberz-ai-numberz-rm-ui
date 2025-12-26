import { forwardRef, ComponentProps } from "react";
import { MagnifyingGlassIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export interface HeaderProps extends Omit<ComponentProps<"header">, "className"> {
  title: string;
  searchPlaceholder?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
  onSearch?: (query: string) => void;
  onUserMenuClick?: () => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      title,
      searchPlaceholder = "Search Reports",
      user,
      onSearch,
      onUserMenuClick,
      ...rest
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        className="bg-white border-b border-gray-200 flex items-center justify-between px-6 py-4 relative shrink-0 w-full h-[72px]"
        {...rest}
      >
        <h1 className="text-[#2e518a] text-[22px] font-semibold leading-[1.25] text-center text-nowrap">
          {title}
        </h1>
        <div className="flex gap-4 items-center relative shrink-0">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-[300px]"
            />
          </div>
          {user && (
            <div className="flex gap-3 items-center relative shrink-0">
              {user.avatarUrl ? (
                <img
                  alt={user.name}
                  src={user.avatarUrl}
                  className="size-10 rounded-full"
                />
              ) : (
                <div className="size-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-gray-700 text-sm font-medium">
                {user.name}
              </span>
              <button
                onClick={onUserMenuClick}
                className="p-1 hover:bg-gray-100 rounded"
                aria-label="User menu"
              >
                <EllipsisVerticalIcon className="size-5 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;

