import { forwardRef, ComponentProps } from "react";
import {
  Squares2X2Icon,
  UserGroupIcon,
  DocumentTextIcon,
  GiftIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export interface SidebarItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SidebarProps extends Omit<ComponentProps<"nav">, "className"> {
  logo?: React.ReactNode;
  rmWorkspaceItems?: SidebarItem[];
  analystWorkspaceItems?: SidebarItem[];
  onCollapse?: () => void;
  isCollapsed?: boolean;
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      logo,
      rmWorkspaceItems = [],
      analystWorkspaceItems = [],
      onCollapse,
      isCollapsed = false,
      ...rest
    },
    ref
  ) => {
    const defaultRmItems: SidebarItem[] = [
      {
        label: "Overview",
        icon: Squares2X2Icon,
        isActive: true,
      },
      {
        label: "Clients",
        icon: UserGroupIcon,
      },
      {
        label: "Published Reports",
        icon: DocumentTextIcon,
      },
      {
        label: "Incentives",
        icon: GiftIcon,
      },
    ];

    const defaultAnalystItems: SidebarItem[] = [
      {
        label: "Research Desk",
        icon: Squares2X2Icon,
      },
      {
        label: "Reports",
        icon: DocumentTextIcon,
      },
      {
        label: "Organization",
        icon: UserGroupIcon,
      },
    ];

    const rmItems = rmWorkspaceItems.length > 0 ? rmWorkspaceItems : defaultRmItems;
    const analystItems =
      analystWorkspaceItems.length > 0
        ? analystWorkspaceItems
        : defaultAnalystItems;

    return (
      <nav
        ref={ref}
        className="bg-white flex flex-col h-screen items-start overflow-hidden relative shrink-0 w-[280px]"
        {...rest}
      >
        <div className="flex gap-2 items-center justify-between p-4 relative shrink-0 w-full">
          {logo || <div className="text-xl font-bold text-[#2e518a]">Midas</div>}
          {onCollapse && (
            <button
              onClick={onCollapse}
              className="p-1 hover:bg-gray-100 rounded"
              aria-label="Collapse sidebar"
            >
              <Bars3Icon className="size-5 text-gray-600" />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-6 items-start p-4 relative shrink-0 w-full">
          <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
              RM WORKSPACE
            </p>
            {rmItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`flex gap-3 items-center px-3 py-2 rounded-lg w-full text-left transition-colors ${
                  item.isActive
                    ? "bg-[#2e518a] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="size-5 shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
              ANALYST WORKSPACE
            </p>
            {analystItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="flex gap-3 items-center px-3 py-2 rounded-lg w-full text-left text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <item.icon className="size-5 shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-auto p-4 relative shrink-0 w-full">
          <button className="flex gap-3 items-center px-3 py-2 rounded-lg w-full text-left text-gray-700 hover:bg-gray-100 transition-colors">
            <Cog6ToothIcon className="size-5 shrink-0" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </nav>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;

