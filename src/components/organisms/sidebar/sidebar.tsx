import { forwardRef, ComponentProps } from "react";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import { cn } from "lib/utils";
import { SIDEBAR_ICONS } from "constants/images";

export interface SidebarItem {
  label: string;
  iconUrl: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SidebarProps extends Omit<ComponentProps<"nav">, "className"> {
  logo?: React.ReactNode;
  workspaceItems?: SidebarItem[];
  systemItems?: SidebarItem[];
  onCollapse?: () => void;
  isCollapsed?: boolean;
  user?: {
    name: string;
    role: string;
    initials?: string;
    avatarUrl?: string;
  };
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      logo,
      workspaceItems = [],
      systemItems = [],
      onCollapse,
      isCollapsed = false,
      user,
      ...rest
    },
    ref
  ) => {
    const defaultWorkspaceItems: SidebarItem[] = [
      {
        label: "Overview",
        iconUrl: SIDEBAR_ICONS.OVERVIEW,
      },
      {
        label: "Reports",
        iconUrl: SIDEBAR_ICONS.REPORTS,
      },
      {
        label: "HNIs",
        iconUrl: SIDEBAR_ICONS.HNIS,
      },
      {
        label: "Engagement",
        iconUrl: SIDEBAR_ICONS.ENGAGEMENT,
        isActive: true,
      },
      {
        label: "Incentives",
        iconUrl: SIDEBAR_ICONS.INCENTIVES,
      },
    ];

    const defaultSystemItems: SidebarItem[] = [
      {
        label: "Integrations",
        iconUrl: SIDEBAR_ICONS.INTEGRATIONS,
      },
      {
        label: "Settings",
        iconUrl: SIDEBAR_ICONS.SETTINGS,
      },
    ];

    const workspaceItemsList = workspaceItems.length > 0 ? workspaceItems : defaultWorkspaceItems;
    const systemItemsList = systemItems.length > 0 ? systemItems : defaultSystemItems;

    const defaultUser = {
      name: "Jenny Wilson",
      role: "Senior RM",
      initials: "JW",
      ...user,
    };

    return (
      <nav
        ref={ref}
        className={cn(
          "bg-[#15253f] flex flex-col h-screen items-start overflow-hidden shrink-0 transition-all duration-300",
          isCollapsed ? "w-[80px]" : "w-[210px]"
        )}
        {...rest}
      >
        {/* Header with Logo and Collapse Button */}
        <div className="border-b border-white/10 flex h-16 items-center justify-between px-4 py-0 shrink-0 w-full">
          {isCollapsed ? (
            <button
              onClick={onCollapse}
              className="overflow-clip relative shrink-0 size-[22px] hover:bg-white/10 rounded transition-colors p-0 border-0 bg-transparent cursor-pointer"
              aria-label="Expand sidebar"
            >
              <div className="absolute flex inset-[13.64%] items-center justify-center">
                <div className="flex-none size-4">
                  <div className="relative size-full">
                    <div className="absolute inset-[-4.37%_-4.38%_-4.38%_-4.37%]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={SIDEBAR_ICONS.COLLAPSE_CHEVRON}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <>
              <div className="flex items-center relative shrink-0">
                {logo || (
                  <p className="text-2xl font-medium leading-normal">
                    <span style={{ color: "#FF7553" }}>Client</span>
                    <span style={{ color: "#FFFFFF" }}>Sphere</span>
                  </p>
                )}
              </div>
              <button
                onClick={onCollapse}
                className="overflow-clip relative shrink-0 size-[22px] hover:bg-white/10 rounded transition-colors p-0 border-0 bg-transparent cursor-pointer"
                aria-label="Collapse sidebar"
              >
                <div className="absolute flex inset-[13.64%] items-center justify-center">
                  <div className="flex-none size-4 transition-transform rotate-180">
                    <div className="relative size-full">
                      <div className="absolute inset-[-4.37%_-4.38%_-4.38%_-4.37%]">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={SIDEBAR_ICONS.COLLAPSE_CHEVRON}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col grow items-center justify-between min-h-0 min-w-0 px-4 py-6 shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start w-full">
            {/* WORKSPACE Section */}
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex items-center justify-between px-4 py-0 w-full">
                {!isCollapsed && (
                  <p className="text-[#a1a8b2] text-[10px] font-normal leading-normal relative shrink-0 text-nowrap">
                    WORKSPACE
                  </p>
                )}
                <div className="relative shrink-0 size-3">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={SIDEBAR_ICONS.CHEVRON_DOWN}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                {workspaceItemsList.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className={cn(
                      "flex gap-3 items-center px-4 py-2.5 w-full text-left transition-colors",
                      item.isActive
                        ? "bg-white/8 border border-white/15 rounded-[10px] text-white font-medium"
                        : "text-[#a1a8b2] hover:bg-white/5 rounded-lg"
                    )}
                  >
                    {item.label === "Reports" ? (
                      <div className="overflow-clip relative shrink-0 size-[22px]">
                        <div className="absolute inset-[8.33%_14.58%_8.33%_14.59%]">
                          <div className="absolute inset-[-3.75%_-4.41%]">
                            <img
                              alt={item.label}
                              className="block max-w-none size-full"
                              src={item.iconUrl}
                            />
                          </div>
                        </div>
                      </div>
                    ) : item.label === "Engagement" ? (
                      <div className="overflow-clip relative shrink-0 size-[22px]">
                        <div className="absolute inset-[10.42%_8.34%_10.41%_8.33%]">
                          <div className="absolute inset-[-3.95%_-3.75%]">
                            <img
                              alt={item.label}
                              className="block max-w-none size-full"
                              src={item.iconUrl}
                            />
                          </div>
                        </div>
                      </div>
                    ) : item.label === "Incentives" ? (
                      <div className="overflow-clip relative shrink-0 size-[22px]">
                        <div className="absolute inset-[14.82%_10.91%]">
                          <div className="absolute inset-[-4.17%_-3.75%]">
                            <img
                              alt={item.label}
                              className="block max-w-none size-full"
                              src={item.iconUrl}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative shrink-0 size-[22px]">
                        <img
                          alt={item.label}
                          className="block max-w-none size-full"
                          src={item.iconUrl}
                        />
                      </div>
                    )}
                    {!isCollapsed && (
                      <span className="text-[13px] leading-normal">{item.label}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SYSTEM Section */}
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex items-center justify-between px-4 py-0 w-full">
                {!isCollapsed && (
                  <p className="text-[#a1a8b2] text-[10px] font-normal leading-normal relative shrink-0 text-nowrap">
                    SYSTEM
                  </p>
                )}
                <div className="relative shrink-0 size-3">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={SIDEBAR_ICONS.CHEVRON_DOWN}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                {systemItemsList.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="flex gap-3 items-center px-4 py-2.5 rounded-lg w-full text-left text-[#a1a8b2] hover:bg-white/5 transition-colors"
                  >
                    {item.label === "Integrations" ? (
                      <div className="overflow-clip relative shrink-0 size-[22px]">
                        <div className="absolute contents inset-0">
                          <div
                            className="absolute inset-[6.05%_8.37%_11.18%_10.22%]"
                            style={{
                              maskImage: `url('${SIDEBAR_ICONS.INTEGRATIONS_MASK}')`,
                              WebkitMaskImage: `url('${SIDEBAR_ICONS.INTEGRATIONS_MASK}')`,
                              maskSize: "22px 22px",
                              maskPosition: "-2.248px -1.331px",
                              maskRepeat: "no-repeat",
                            }}
                          >
                            <div className="absolute inset-[-3.91%_-3.97%]">
                              <img
                                alt={item.label}
                                className="block max-w-none size-full"
                                src={SIDEBAR_ICONS.INTEGRATIONS}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.label === "Settings" ? (
                      <div className="overflow-clip relative shrink-0 size-[22px]">
                        <div className="absolute inset-[12.5%_8.33%]">
                          <div className="absolute inset-[-4.17%_-3.75%]">
                            <img
                              alt={item.label}
                              className="block max-w-none size-full"
                              src={item.iconUrl}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative shrink-0 size-[22px]">
                        <img
                          alt={item.label}
                          className="block max-w-none size-full"
                          src={item.iconUrl}
                        />
                      </div>
                    )}
                    {!isCollapsed && (
                      <span className="text-[13px] leading-normal">{item.label}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* User Profile at Bottom */}
          {!isCollapsed && (
            <div className="flex gap-2 items-center w-full">
              <div className="bg-[#ff7553] border-[0.6px] border-white border-solid flex flex-col items-start max-w-[224px] overflow-clip p-[0.6px] relative rounded-full shrink-0 size-[42px]">
                <div className="relative shrink-0 size-[40px]">
                  <Avatar className="size-[40px] rounded-full bg-[#ff7553] border-0">
                    <AvatarFallback className="bg-[#ff7553] text-white text-[17.5px] font-semibold leading-normal">
                      {defaultUser.initials || defaultUser.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 min-w-0">
                <p className="text-white text-sm font-medium leading-[20px] truncate max-w-[224px]">
                  {defaultUser.name}
                </p>
                <p className="text-[#94a3b8] text-xs font-normal leading-[16px] truncate max-w-[224px]">
                  {defaultUser.role}
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="bg-[#ff7553] border-[0.6px] border-white border-solid flex flex-col items-center justify-center max-w-[224px] overflow-clip p-[0.6px] relative rounded-full shrink-0 size-[42px] mx-auto">
              <div className="relative shrink-0 size-[40px]">
                <Avatar className="size-[40px] rounded-full bg-[#ff7553] border-0">
                  <AvatarFallback className="bg-[#ff7553] text-white text-[17.5px] font-semibold leading-normal">
                    {defaultUser.initials || defaultUser.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
